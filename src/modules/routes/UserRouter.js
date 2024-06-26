import { Router } from "express";
import UserController from "../controller/UserController.js";
import checkToken from "../../config/auth/checkToken.js";

const router = new Router();
const userController = new UserController();

router.post('/api/user/auth', (req, res) => userController.getAcessToken(req, res));

router.use(checkToken);

router.get('/api/user/email/:email', (req, res) => userController.findByEmail(req, res));


export default router;
