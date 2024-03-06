"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function errorHandler(res, status, message) {
    return res.status(status).json({ error: message });
}
exports.errorHandler = errorHandler;
const secret = process.env.JWT_SECRET || 'theCenterWontHold';
if (!secret)
    throw new Error('JWT secret is not defined');
const options = {
    algorithm: 'HS256',
    expiresIn: '100d',
};
const generateToken = (payload) => {
    const token = (0, jsonwebtoken_1.sign)(payload, secret, options);
    return token;
};
const validateToken = (token) => {
    try {
        (0, jsonwebtoken_1.verify)(token, secret);
        return true;
    }
    catch (error) {
        return false;
    }
};
const authToken = (token) => (0, jsonwebtoken_1.verify)(token, secret);
const util = {
    generateToken,
    validateToken,
    authToken,
};
exports.default = util;
//# sourceMappingURL=index.js.map