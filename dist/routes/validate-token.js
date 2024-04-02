"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            //tiene token
            const bearerToken = headerToken.slice(7);
            jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'tanto54321');
            next();
        }
        catch (error) {
            res.status(400).json({
                msg: 'token no valido'
            });
        }
    }
    else {
        res.status(400).json({
            msg: 'Acceso Denegado'
        });
    }
};
exports.default = validateToken;
