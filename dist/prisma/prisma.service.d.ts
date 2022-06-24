import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    findUnique(arg0: {
        where: {
            id: any;
        };
    }): import(".prisma/client").User | PromiseLike<import(".prisma/client").User>;
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
