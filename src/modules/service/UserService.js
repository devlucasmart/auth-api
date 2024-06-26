import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import UserRepository from "../repository/UserRepository.js";
import UserException from "../model/user/exception/UserException.js";
import * as httpStatus from "../../config/constants/httpStatus.js";
import * as secrets from "../../config/constants/secrets.js";

class UserService {
    async findByEmail(req){
        try {
            const { email } = req.params;
            const { authUser } = req;
            this.validateRequestData(email);
            let user = await UserRepository.findByEmail(email);
            this.validateUserNotFound(user);
            this.validateAuthenticatedUser(user, authUser)

            return {
                status: httpStatus.SUCESS,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            }
        } catch (err) {
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,
            }
        }
    }

    validateRequestData(email){
        if(!email) {
            throw new UserException(httpStatus.BAD_REQUEST, 
                "User email was not informed.");
        }
    }

    validateUserNotFound(user){
        if(!user) {
            throw new UserException(httpStatus.BAD_REQUEST, 
                "User was not found!");
        }
    }

    validateAuthenticatedUser(user, authUser) {
        if (!authUser || user.id !== authUser.id) {
            throw new UserException(
                httpStatus.FORBIDDEN,
                "You cannot see this user data."
            )
        }
    }

    async getAcessToken(req) {
        try {
            const { email, password} = req.body;
            this.validateAcessTokenData(email, password);
            let user = await UserRepository.findByEmail(email);
            this.validateUserNotFound(user);
            const authUser = {id: user.id, name: user.name, email: user.email };
            const acessToken = jwt.sign({authUser}, secrets.API_SECRET,
                {expiresIn: '1d'}
             );

            return {
                status: httpStatus.SUCESS,
                acessToken,
            };
        } catch (err) {
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,
            }
        }
    }

    validateAcessTokenData(email, password) {
        if (!email || !password) {
            throw new UserException(
                httpStatus.UNAUTHORIZED, 
                "Email and password must be informed."
            );
        }
    }

    async validatePassword(password, hashPassword) {
        const match = await bcrypt.compare(password, hashPassword);
        if (!match) {
            throw new UserException(httpStatus.UNAUTHORIZED, "Password doesn't match.");
        }
    }
}

export default new UserService();