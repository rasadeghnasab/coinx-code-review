import pino from "pino";

const options = {
    level: "info",
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
};

export const logger = pino(options);