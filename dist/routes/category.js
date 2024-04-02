"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', category_1.getCategorys);
router.get('/:id', category_1.getCategory);
router.delete('/:id', validate_token_1.default, category_1.deleteCategory);
router.post('/', validate_token_1.default, category_1.postCategory);
router.put('/:id', validate_token_1.default, category_1.updateCategory);
exports.default = router;
