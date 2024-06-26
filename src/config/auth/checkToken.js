import jwt from "jsonwebtoken";
import { promisify } from "util";

import AuthException from "./AuthException.js";
import * as secrets from "../constants/secrets.js";
import * as httpStatus from "../constants/httpStatus.js";

const emptySpace = " ";

const checkToken = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new AuthException(httpStatus.UNAUTHORIZED, "Access token was not informed.");
        }

        let accessToken = authorization;
        if (accessToken.includes(emptySpace)) {
            accessToken = accessToken.split(emptySpace)[1];
        }

        const decoded = await promisify(jwt.verify)(
            accessToken,
            secrets.API_SECRET
        );

        req.authUser = decoded.authUser;
        return next();
    } catch (err) {
        const status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
        const message = err.message || "Internal Server Error";
        console.error("Error in checkToken middleware:", err);
        return res.status(status).json({
            status,
            message,
        });
    }
};

export default checkToken;
