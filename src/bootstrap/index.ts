import {pinoHttp} from "pino-http";
import "./logging"
import {logger} from "../utils/logger";

export default (app) => {
    app.use(pinoHttp({logger}));
}
