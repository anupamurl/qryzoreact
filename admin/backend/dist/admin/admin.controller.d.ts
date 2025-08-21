import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<import("./admin.schema").Admin>;
    findAll(): Promise<import("./admin.schema").Admin[]>;
    findOne(id: string): Promise<import("./admin.schema").Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<import("./admin.schema").Admin>;
    remove(id: string): Promise<void>;
}
