import express, { Express } from "express";
import { indexRouter } from "./routers/index_router"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet";

const app: Express = express();
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(indexRouter)

export default app;