import express, {Application} from 'express'
import cors from "cors";
import bodyParser from "body-parser";
import {CORS_ORIGINS} from "../config";

import favoriteRouter from "./favorite.router";
import profileRouter from "./profile.router";
import simulatorRouter from "./simulator.router";

const app: Application = express();

app.use(cors({origin: CORS_ORIGINS}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/', favoriteRouter);
app.use('/api/', profileRouter);
app.use('/api/', simulatorRouter);

export default app;
