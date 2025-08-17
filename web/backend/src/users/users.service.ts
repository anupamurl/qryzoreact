import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOrCreate(profile: any): Promise<User> {
    if (!profile?.id || !profile?.emails?.[0]?.value) {
      throw new Error('Invalid profile data');
    }
    
    let user = await this.userModel.findOne({ 
      $or: [{ googleId: profile.id }, { email: profile.emails[0].value }]
    });
    
    if (!user) {
      user = new this.userModel({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName || 'Unknown User',
        picture: profile.photos?.[0]?.value || '',
        lastLoginAt: new Date()
      });
      await user.save();
    } else {
      // Update profile picture and last login on each login
      user.picture = profile.photos?.[0]?.value || user.picture;
      user.name = profile.displayName || user.name;
      user.lastLoginAt = new Date();
      await user.save();
    }
    
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  async updateProfile(id: string, profileData: any): Promise<User> {
    if (!id) {
      throw new Error('User ID is required');
    }
    
    const updateData = {
      ...profileData,
      profileCompleted: true,
      updatedAt: new Date()
    };
    
    const user = await this.userModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!user) {
      throw new Error('User not found');
    }
    
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().select('-__v').sort({ createdAt: -1 });
  }

  async getUserStats(): Promise<any> {
    const totalUsers = await this.userModel.countDocuments();
    const completedProfiles = await this.userModel.countDocuments({ profileCompleted: true });
    const recentUsers = await this.userModel.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });
    
    return {
      totalUsers,
      completedProfiles,
      recentUsers,
      completionRate: totalUsers > 0 ? (completedProfiles / totalUsers * 100).toFixed(1) : 0
    };
  }
}