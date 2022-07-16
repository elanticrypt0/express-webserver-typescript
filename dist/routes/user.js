"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({
        msg: 'GET'
    });
});
router.put('/', (req, res) => {
    res.json({
        msg: 'PUT'
    });
});
router.post('/', (req, res) => {
    res.json({
        msg: 'POST'
    });
});
router.delete('/', (req, res) => {
    res.json({
        msg: 'DELETE'
    });
});
exports.default = router;
