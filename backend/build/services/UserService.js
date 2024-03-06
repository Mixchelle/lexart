"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const User_1 = __importDefault(require("../db/models/User"));
const utils_1 = __importDefault(require("../utils"));
class UserService {
    static async login(email, password) {
        const user = await User_1.default.findOne({
            where: { email },
        });
        if (!user)
            return null;
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch)
            return null;
        const token = utils_1.default.generateToken({ email, password });
        return token;
    }
    static async createUser(data) {
        try {
            const { username, email, password } = data;
            const existingUser = await User_1.default.findOne({ where: { email } });
            if (existingUser) {
                return { error: 'O email já está sendo usado por outro usuário.' };
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User_1.default.create({
                username,
                email,
                password: hashedPassword,
            });
            return { message: 'Usuário criado com sucesso.', user: newUser };
        }
        catch (error) {
            console.error(error);
            return { error: 'Erro ao criar novo usuário.' };
        }
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map