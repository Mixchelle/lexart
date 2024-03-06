"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const loginValidate_1 = __importDefault(require("../midlewares/loginValidate"));
const router = (0, express_1.Router)();
router.post('/login', loginValidate_1.default, UserController_1.default.login);
router.post('/create', UserController_1.default.createUser);
exports.default = router;
//# sourceMappingURL=UserRouter.js.map