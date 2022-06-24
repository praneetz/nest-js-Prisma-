"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PraModule = void 0;
const common_1 = require("@nestjs/common");
const pra_service_1 = require("./pra.service");
const pra_controller_1 = require("./pra.controller");
let PraModule = class PraModule {
};
PraModule = __decorate([
    (0, common_1.Module)({
        controllers: [pra_controller_1.PraController],
        providers: [pra_service_1.PraService]
    })
], PraModule);
exports.PraModule = PraModule;
//# sourceMappingURL=pra.module.js.map