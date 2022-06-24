import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(body: CreateUserDto): Promise<User>;
    getuser(id: number): Promise<User>;
    getAllUsers(): Promise<User[]>;
    deleteUser(id: number): Promise<string>;
    updateUser(id: number, body: UpdateUserDto): Promise<User>;
}
