import {handle} from "../utils/errors";

process.on("unhandledRejection", (err) => {
    throw err;
});

process.on("uncaughtException", (err) => {
    handle(err);
});