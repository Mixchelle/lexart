"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter_1 = __importDefault(require("./UserRouter"));
const ProductsRouter_1 = __importDefault(require("./ProductsRouter"));
const router = (0, express_1.Router)();
router.use('/user', UserRouter_1.default);
router.use('/product', ProductsRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map