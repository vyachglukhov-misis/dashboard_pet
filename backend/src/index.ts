import express, {Application} from "express"
import cors, {CorsOptions} from "cors";
import Database from "./db";
import Routes from "./routes";


class Server {
    constructor(app: Application){
        this.config(app)
        new Routes(app)
    }
    private config(app: Application){
        const CorsOptions: CorsOptions = {
            origin: "http://localhost:5173"
        }
        const db = new Database();
        db.sequelize;
        app.use(cors(CorsOptions));
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
    }
}
const app: Application = express()
const server: Server = new Server(app)

app.listen(5000, function() {
    console.log("server is started on port 5000")
    
}).on("error", function (err: any){
    console.log(err)
})