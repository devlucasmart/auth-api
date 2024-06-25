import express from "express";

import * as db from "./src/config/db/initialData.js";

const app = express();
const env = process.env;
const PORT = env.PORT || 3001;

console.log(db);

db.createInitialData();

app.get('/api/status', (req, res) => {
    return res.json({
        service: "Auth-API",
        status: "up",
        httpStatus: 200,
    });
});

app.listen(PORT, () => {
    console.info(`Server started successfully at port ${PORT}`);
});