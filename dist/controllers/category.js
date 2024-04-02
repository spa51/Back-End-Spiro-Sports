"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = exports.postCategory = exports.deleteCategory = exports.getCategory = exports.getCategorys = void 0;
const category_1 = __importDefault(require("../models/category"));
// Categorias Listas
// Mostrar todo Categorias
const getCategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCategorys = yield category_1.default.findAll();
    res.json(listCategorys);
});
exports.getCategorys = getCategorys;
// Mostrar uno ID
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield category_1.default.findByPk(id);
    if (category) {
        res.json(category);
    }
    else {
        res.status(404).json({
            msg: `No existe una categoria con el id ${id}`
        });
    }
});
exports.getCategory = getCategory;
// Eliminar uno ID
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield category_1.default.findByPk(id);
    if (category) {
        yield category.destroy();
        res.json({
            msg: 'La categoria fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un categoria con el id ${id}`
        });
    }
});
exports.deleteCategory = deleteCategory;
// Agregar UNO ID
const postCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield category_1.default.create(body);
        res.json({
            msg: `La Categoria fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `No lo puedo Creer algo salio mal que sera?`
        });
    }
}); // Actualizar uno ID
exports.postCategory = postCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const category = yield category_1.default.findByPk(id);
        if (category) {
            yield category.update(body);
            res.json({
                msg: 'La categoria fue actualizada con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una categoria con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `No lo puedo Creer algo salio mal que sera?`
        });
    }
});
exports.updateCategory = updateCategory;
