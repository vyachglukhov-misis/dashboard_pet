import { Sequelize } from "sequelize-typescript";
import {config, dialect} from "../config/db.config"
import Product from "../models/product.model";
import MonthlyData from "../models/monthlyData.model";
import DailyData from "../models/dailyData.model";
import Transaction from "../models/transaction.model";
import updatedata from "../updatedata";

class Database {
    public sequelize: Sequelize | undefined;

    constructor(){
        this.connectToDatabase()
    }
    private async connectToDatabase(){
        this.sequelize = new Sequelize({
            database: config.DB,
            host: config.host,
            password: config.password,
            username: config.user,
            dialect: dialect,
            pool: config.pool,
            models: [Product, MonthlyData, DailyData, Transaction],
            define: {
                timestamps: false
            }
        })
        await this.sequelize
        .authenticate()
        .then(()=> {
            console.log("connection has been established successfully")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export default Database