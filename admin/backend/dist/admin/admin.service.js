"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const admin_schema_1 = require("./admin.schema");
let AdminService = class AdminService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async create(createAdminDto) {
        const existingAdmin = await this.adminModel.findOne({ email: createAdminDto.email });
        if (existingAdmin) {
            throw new common_1.ConflictException('Admin with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
        const admin = new this.adminModel({
            ...createAdminDto,
            password: hashedPassword,
        });
        return admin.save();
    }
    async findAll() {
        return this.adminModel.find().select('-password').exec();
    }
    async findOne(id) {
        const admin = await this.adminModel.findById(id).select('-password').exec();
        if (!admin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return admin;
    }
    async findByEmail(email) {
        return this.adminModel.findOne({ email }).exec();
    }
    async update(id, updateAdminDto) {
        if (updateAdminDto.password) {
            updateAdminDto.password = await bcrypt.hash(updateAdminDto.password, 10);
        }
        const admin = await this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true }).select('-password').exec();
        if (!admin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return admin;
    }
    async remove(id) {
        const result = await this.adminModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Admin not found');
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminService);
//# sourceMappingURL=admin.service.js.map