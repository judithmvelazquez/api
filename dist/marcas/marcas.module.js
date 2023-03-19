"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcasModule = void 0;
const common_1 = require("@nestjs/common");
const marcas_service_1 = require("./marcas.service");
const marcas_controller_1 = require("./marcas.controller");
let MarcasModule = class MarcasModule {
};
MarcasModule = __decorate([
    (0, common_1.Module)({
        controllers: [marcas_controller_1.MarcasController],
        providers: [marcas_service_1.MarcasService]
    })
], MarcasModule);
exports.MarcasModule = MarcasModule;
//# sourceMappingURL=marcas.module.js.map