"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
const router = (0, express_1.Router)();
// router.use(authenticateToken);
router.post('/', ProductsController_1.default.create);
router.get('/all', ProductsController_1.default.getAll);
router.get('/:id', ProductsController_1.default.getById);
router.put('/:id', ProductsController_1.default.update);
router.delete('/:id', ProductsController_1.default.delete);
exports.default = router;
//# sourceMappingURL=ProductsRouter.js.map