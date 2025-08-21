import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./user.schema").User>;
    findAll(): Promise<import("./user.schema").User[]>;
    findOne(id: string): Promise<import("./user.schema").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./user.schema").User>;
    remove(id: string): Promise<void>;
}
