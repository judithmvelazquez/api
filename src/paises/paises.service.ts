import { Injectable } from '@nestjs/common';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
const db = [
  {
    id: 1,
    name: 'nicaragua',
  },
  {
    id: 2,
    name: 'guatemala',
  },
  {
    id: 3,
    name: 'panama',
  },
  {
    id: 4,
    name: 'honduras',
  }
];
@Injectable()
export class PaisesService {
  create(createPaiseDto: CreatePaiseDto) {
    return 'This action adds a new paise';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} paise`;
  }

  update(id: number, updatePaiseDto: UpdatePaiseDto) {
    return `This action updates a #${id} paise`;
  }

  remove(id: number) {
    return `This action removes a #${id} paise`;
  }
}
