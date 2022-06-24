import { CreatePraDto } from './dto/create-pra.dto';
import { UpdatePraDto } from './dto/update-pra.dto';
export declare class PraService {
    create(createPraDto: CreatePraDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePraDto: UpdatePraDto): string;
    remove(id: number): string;
}
