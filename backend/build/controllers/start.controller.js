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
exports.getAll = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const transaction_model_1 = __importDefault(require("../models/transaction.model"));
const dailyData_model_1 = __importDefault(require("../models/dailyData.model"));
const monthlyData_model_1 = __importDefault(require("../models/monthlyData.model"));
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let totalinfo = {
            totalProfit: 212000.00,
            totalRevenue: 283000.00,
            totalExpenses: 71000.00
        };
        let expensesByCategory = {
            salaries: 38000.00,
            supplies: 13000.00,
            services: 10000.00,
        };
        let products = yield product_model_1.default.findAll();
        let transactions = yield transaction_model_1.default.findAll();
        let dailyData = yield dailyData_model_1.default.findAll();
        let monthlyData = yield monthlyData_model_1.default.findAll();
        let ourResponse = { totalinfo, monthlyData, dailyData, transactions, products, expensesByCategory };
        return res.json(ourResponse);
    });
}
exports.getAll = getAll;
