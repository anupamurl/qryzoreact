import { Model } from 'mongoose';
import { Admin, AdminDocument } from './admin.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminService {
    private adminModel;
    constructor(adminModel: Model<AdminDocument>);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: string): Promise<Admin>;
    findByEmail(email: string): Promise<AdminDocument>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    remove(id: string): Promise<void>;
}
