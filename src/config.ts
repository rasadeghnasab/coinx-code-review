import dotenv from "dotenv";

dotenv.config();

const checkEnv = (envVar: string, defaultValue?: string) => {
    if (!process.env[envVar]) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error(`Please define the Environment variable"${envVar}"`);
    } else {
        return process.env[envVar] as string;
    }
};

export const APP_URL: string = checkEnv("APP_URL", 'http://localhost');
export const PORT: number = parseInt(checkEnv("PORT", '3000'), 10);
export const DB_URL: string = checkEnv("DB_URL");
export const CORS_ORIGINS = [`${APP_URL}:${PORT}`];
