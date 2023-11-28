import {Application} from "express";
import { Response, Request } from "express";
import { getAll } from "../controllers/start.controller";


export default class Routes{
    constructor(app: Application){
        app.use("/", getAll)
    }
}