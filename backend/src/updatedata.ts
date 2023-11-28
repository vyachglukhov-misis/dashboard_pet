import MontlyData from "./models/monthlyData.model"
const {Op} = require('sequelize-typescript')
import DailyData from "./models/dailyData.model"
import Transaction from "./models/transaction.model"
import { transactions } from "./data"
import Product from "./models/product.model"


export default async function updatedata() {
    for(let i=0; i<transactions.length; i++){
        Transaction.update({
            amount: parseFloat(transactions[i].amount.slice(1))
        }, {where: {id: i+1}})
    }
} 