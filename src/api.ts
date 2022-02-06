import mongoose from "mongoose";
import {PORT, DB_URL} from "./config";
import app from "./routes";
import bootstrap from "./bootstrap";

bootstrap(app);

mongoose
    .connect(`${DB_URL}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`✅ Connected to DB ${DB_URL}`))
    .catch((error) => {
        console.log(`Failed to connect to the mongodb: ${error}`)
        process.exit(1)
    });

const server = app.listen(PORT, () =>
    console.log(`✅ Ready on port http://localhost:${PORT}`)
);

export default server;
