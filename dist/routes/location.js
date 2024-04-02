"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_1 = require("../controllers/location");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', location_1.getLocations);
router.get('/:id', location_1.getLocation);
router.delete('/:id', validate_token_1.default, location_1.deleteLocation);
router.post('/', validate_token_1.default, location_1.postLocation);
router.put('/:id', validate_token_1.default, location_1.updateLocation);
exports.default = router;
