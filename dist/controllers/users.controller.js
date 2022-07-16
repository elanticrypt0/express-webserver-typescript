"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersController {
    usersGet(req, res) {
        // Aquì tiene una desestructuraciòn con valores de ejemplo.
        const { q, name = 'No name', apikey, page = 1, limit } = req.query;
        res.json({
            msg: 'Get API',
            q,
            name,
            apikey,
            page,
            limit
        });
    }
    usersPut(req, res) {
        const id = req.params.id;
        res.json({
            msg: 'Put API',
            id
        });
    }
    usersPost(req, res) {
        const body = req.body;
        res.json({
            msg: 'Post API',
            body
        });
    }
    usersDelete(req, res) {
        res.json({
            msg: 'Delete API'
        });
    }
}
exports.default = UsersController;
