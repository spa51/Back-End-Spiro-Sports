"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Category = connection_1.default.define('categorys', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    iconUrl: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Category;
