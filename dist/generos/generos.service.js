"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerosService = void 0;
const common_1 = require("@nestjs/common");
const db = [
    {
        id: 1,
        name: 'unisex',
    },
    {
        id: 2,
        name: 'a-sex',
    },
    {
        id: 3,
        name: 'multisex',
    },
];
let GenerosService = class GenerosService {
    create(createGeneroDto) {
        return 'This action adds a new genero';
    }
    findAll() {
        return db;
    }
    findOne(id) {
        return `This action returns a #${id} genero`;
    }
    update(id, updateGeneroDto) {
        return `This action updates a #${id} genero`;
    }
    remove(id) {
        return `This action removes a #${id} genero`;
    }
};
GenerosService = __decorate([
    (0, common_1.Injectable)()
], GenerosService);
exports.GenerosService = GenerosService;
//# sourceMappingURL=generos.service.js.map