"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = (0, express_1.Router)();
const users = new users_controller_1.default();
router.get('/', users.usersGet);
router.put('/:id', users.usersPut);
router.post('/', users.usersPost);
router.delete('/:id', users.usersDelete);
exports.default = router;
