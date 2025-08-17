import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOrCreate(profile: any): Promise<User> {
    let user = await this.userModel.findOne({ 
      $or: [{ googleId: profile.id }, { email: profile.emails[0].value }]
    });
    
    if (!user) {
      user = new this.userModel({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        picture: profile.photos[0].value,
      });
      await user.save();
    } else {
      // Update profile picture from Google on each login
      user.picture = profile.photos[0].value;
      user.name = profile.displayName;
      await user.save();
    }
    
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  async updateProfile(id: string, profileData: any): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      id,
      { ...profileData, profileCompleted: true },
      { new: true }
    );
  }
}