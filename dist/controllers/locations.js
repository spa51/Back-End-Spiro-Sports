"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocation = exports.getLocations = void 0;
const getLocations = (req, res) => {
    res.json({
        msg: 'get Locations'
    });
};
exports.getLocations = getLocations;
const getLocation = (req, res) => {
    res.json({
        msg: 'get Location',
        id: req.params.id
    });
};
exports.getLocation = getLocation;
