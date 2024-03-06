"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
const index_1 = require("../utils/index");
class UserController {
    static async login(req, res) {
        const { email, password } = req.body;
        console.log('email:', email, 'senha:', password);
        try {
            const token = await UserService_1.default.login(email, password);
            if (typeof token !== 'string') {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            return res.status(200).json({ token });
        }
        catch (error) {
            return res.status(401).json({ message: error });
        }
    }
    static async createUser(req, res) {
        try {
            const result = await UserService_1.default.createUser(req.body);
            console.log('user:', req.body);
            if (result.error) {
                return (0, index_1.errorHandler)(res, 400, result.error);
            }
            console.log(result);
            return res.status(201).json(result);
        }
        catch (error) {
            return (0, index_1.errorHandler)(res, 500, 'Erro ao criar novo usuário.');
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map