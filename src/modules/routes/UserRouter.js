import { Router } from "express";
import UserController from "../controller/UserController.js";

const router = new Router();
const userController = new UserController();

router.get('/api/user/email/:email', (req, res) => userController.findByEmail(req, res));
router.post('/api/user/auth', (req, res) => userController.getAcessToken(req, res));

export default router;
