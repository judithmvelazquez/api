import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
const db = [
  {
    id: 1,
    name: 'blusas',
  },
  {
    id: 2,
    name: 'pantalones',
  },
  {
    id: 3,
    name: 'vestidos',
  },
  {
    id: 4,
    name: 'faldas',
  }
];

@Injectable()
export class CategoriasService {
  create(createCategoriaDto: CreateCategoriaDto) {
    return 'This action adds a new categoria';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
