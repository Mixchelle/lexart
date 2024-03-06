"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    const regex = /\S+@\S+\.\S+/;
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields must be filled' });
    }
    if (!regex.test(email) || password.length < 6) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
};
exports.default = validateLogin;
//# sourceMappingURL=loginValidate.js.map