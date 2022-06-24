import { PraService } from './pra.service';
import { CreatePraDto } from './dto/create-pra.dto';
import { UpdatePraDto } from './dto/update-pra.dto';
export declare class PraController {
    private readonly praService;
    constructor(praService: PraService);
    create(createPraDto: CreatePraDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePraDto: UpdatePraDto): string;
    remove(id: string): string;
}
