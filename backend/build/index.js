"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const routes_1 = __importDefault(require("./routes"));
class Server {
    constructor(app) {
        this.config(app);
        new routes_1.default(app);
    }
    config(app) {
        const CorsOptions = {
            origin: "http://localhost:5173"
        };
        const db = new db_1.default();
        db.sequelize;
        app.use((0, cors_1.default)(CorsOptions));
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
    }
}
const app = (0, express_1.default)();
const server = new Server(app);
app.listen(5000, function () {
    console.log("server is started on port 5000");
}).on("error", function (err) {
    console.log(err);
});
