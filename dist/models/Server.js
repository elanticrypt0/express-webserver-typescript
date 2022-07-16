"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        // Middlewares
        this.middlewares();
        // app's routes
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Read and parse of Body
        this.app.use(express_1.default.json());
        // public directory
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.usersPath, users_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening port: ${this.port}`);
        });
    }
}
exports.default = Server;
