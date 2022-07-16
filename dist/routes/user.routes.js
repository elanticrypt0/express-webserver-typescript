"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = (0, express_1.Router)();
const users = new users_controller_1.default();
router.get('/', (req, res) => users.usersGet(req, res));
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
