"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
class CommonRoutes {
    route(app) {
        //URL nao encontrada
        app.all('*', function (req, res) {
            res.status(404).send({ error: true, message: 'Lugar errado...' });
        });
    }
}
exports.CommonRoutes = CommonRoutes;
