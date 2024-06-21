import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 3001;

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