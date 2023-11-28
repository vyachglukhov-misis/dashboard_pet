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
const { Op } = require('sequelize-typescript');
const transaction_model_1 = __importDefault(require("./models/transaction.model"));
const data_1 = require("./data");
function updatedata() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < data_1.transactions.length; i++) {
            transaction_model_1.default.update({
                amount: parseFloat(data_1.transactions[i].amount.slice(1))
            }, { where: { id: i + 1 } });
        }
    });
}
exports.default = updatedata;
