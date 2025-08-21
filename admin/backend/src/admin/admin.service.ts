import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Admin, AdminDocument } from './admin.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<AdminDocument>) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const existingAdmin = await this.adminModel.findOne({ email: createAdminDto.email });
    if (existingAdmin) {
      throw new ConflictException('Admin with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
    const admin = new this.adminModel({
      ...createAdminDto,
      password: hashedPassword,
    });

    return admin.save();
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().select('-password').exec();
  }

  async findOne(id: string): Promise<Admin> {
    const admin = await this.adminModel.findById(id).select('-password').exec();
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
  }

  async findByEmail(email: string): Promise<AdminDocument> {
    return this.adminModel.findOne({ email }).exec();
  }

  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    if (updateAdminDto.password) {
      updateAdminDto.password = await bcrypt.hash(updateAdminDto.password, 10);
    }

    const admin = await this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true }).select('-password').exec();
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
  }

  async remove(id: string): Promise<void> {
    const result = await this.adminModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Admin not found');
    }
  }
}