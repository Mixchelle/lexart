"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const index_1 = __importDefault(require("../utils/index"));
async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log('dados req.headers', req.headers);
    console.log('authHeader', authHeader);
    if (!authHeader) {
        res.status(401).json({ error: 'Token not provided' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = index_1.default.authToken(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(403).json({ error: 'Invalid token' });
        return;
    }
}
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=tokenValidate.js.map