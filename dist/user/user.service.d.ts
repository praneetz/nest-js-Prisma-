import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    finduser(id: number): Promise<User>;
    findAllUser(): Promise<User[]>;
    deleteUser(id: number): Promise<User>;
    updateUser(id: number, data: object): Promise<User>;
}
