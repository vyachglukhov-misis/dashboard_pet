"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const db_config_1 = require("../config/db.config");
const product_model_1 = __importDefault(require("../models/product.model"));
const monthlyData_model_1 = __importDefault(require("../models/monthlyData.model"));
const dailyData_model_1 = __importDefault(require("../models/dailyData.model"));
const transaction_model_1 = __importDefault(require("../models/transaction.model"));
class Database {
    constructor() {
        this.connectToDatabase();
    }
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sequelize = new sequelize_typescript_1.Sequelize({
                database: db_config_1.config.DB,
                host: db_config_1.config.host,
                password: db_config_1.config.password,
                username: db_config_1.config.user,
                dialect: db_config_1.dialect,
                pool: db_config_1.config.pool,
                models: [product_model_1.default, monthlyData_model_1.default, dailyData_model_1.default, transaction_model_1.default],
                define: {
                    timestamps: false
                }
            });
            yield this.sequelize
                .authenticate()
                .then(() => {
                console.log("connection has been established successfully");
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
}
exports.default = Database;
