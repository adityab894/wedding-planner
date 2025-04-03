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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDTO = exports.UserRole = void 0;
const class_validator_1 = require("class-validator");
var UserRole;
(function (UserRole) {
    UserRole[UserRole["user"] = 0] = "user";
    UserRole[UserRole["admin"] = 1] = "admin";
    UserRole[UserRole["vendor"] = 2] = "vendor";
})(UserRole || (exports.UserRole = UserRole = {}));
class RegisterUserDTO {
    name;
    email;
    password;
    role;
}
exports.RegisterUserDTO = RegisterUserDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required" }),
    __metadata("design:type", String)
], RegisterUserDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password is required" }),
    __metadata("design:type", String)
], RegisterUserDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Role is required" }),
    (0, class_validator_1.IsEnum)(UserRole),
    __metadata("design:type", Number)
], RegisterUserDTO.prototype, "role", void 0);
//# sourceMappingURL=auth.dto.js.map