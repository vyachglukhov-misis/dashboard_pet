"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const start_controller_1 = require("../controllers/start.controller");
class Routes {
    constructor(app) {
        app.use("/", start_controller_1.getAll);
    }
}
exports.default = Routes;
