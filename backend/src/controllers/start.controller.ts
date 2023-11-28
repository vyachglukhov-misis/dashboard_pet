import {Request, Response} from "express";
import Product from "../models/product.model";
import Transaction from "../models/transaction.model";
import DailyData from "../models/dailyData.model";
import MonthlyData from "../models/monthlyData.model";

export async function getAll(req: Request, res: Response) {
    let totalinfo = {
        totalProfit: 212000.00,
        totalRevenue: 283000.00,
        totalExpenses: 71000.00
    }
let expensesByCategory ={
        salaries: 38000.00,
        supplies: 13000.00,
        services: 10000.00,
      }
    let products = await Product.findAll();
    let transactions = await Transaction.findAll();
    let dailyData = await DailyData.findAll()
    let monthlyData = await MonthlyData.findAll();
    let ourResponse = {totalinfo, monthlyData, dailyData, transactions, products, expensesByCategory}
    return res.json(ourResponse);

}