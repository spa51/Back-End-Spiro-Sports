"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const category_1 = __importDefault(require("./category"));
class Location extends sequelize_1.Model {
}
Location.init({
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    category: {
        type: sequelize_1.DataTypes.INTEGER
    },
    latitude: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    longitude: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    sequelize: connection_1.default,
    modelName: 'Location',
    createdAt: false,
    updatedAt: false
});
Location.belongsTo(category_1.default, { foreignKey: 'category', as: 'categoryDetails' });
exports.default = Location;
