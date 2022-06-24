"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePraDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pra_dto_1 = require("./create-pra.dto");
class UpdatePraDto extends (0, mapped_types_1.PartialType)(create_pra_dto_1.CreatePraDto) {
}
exports.UpdatePraDto = UpdatePraDto;
//# sourceMappingURL=update-pra.dto.js.map