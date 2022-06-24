"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PraController = void 0;
const common_1 = require("@nestjs/common");
const pra_service_1 = require("./pra.service");
const create_pra_dto_1 = require("./dto/create-pra.dto");
const update_pra_dto_1 = require("./dto/update-pra.dto");
let PraController = class PraController {
    constructor(praService) {
        this.praService = praService;
    }
    create(createPraDto) {
        return this.praService.create(createPraDto);
    }
    findAll() {
        return this.praService.findAll();
    }
    findOne(id) {
        return this.praService.findOne(+id);
    }
    update(id, updatePraDto) {
        return this.praService.update(+id, updatePraDto);
    }
    remove(id) {
        return this.praService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pra_dto_1.CreatePraDto]),
    __metadata("design:returntype", void 0)
], PraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pra_dto_1.UpdatePraDto]),
    __metadata("design:returntype", void 0)
], PraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PraController.prototype, "remove", null);
PraController = __decorate([
    (0, common_1.Controller)('pra'),
    __metadata("design:paramtypes", [pra_service_1.PraService])
], PraController);
exports.PraController = PraController;
//# sourceMappingURL=pra.controller.js.map