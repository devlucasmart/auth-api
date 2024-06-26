import UserService from "../service/UserService.js"
class UserController {
    async getAcessToken(req, res) {
        let acessToken = await UserService.getAcessToken(req);
        return res.status(acessToken.status).json(acessToken);        
    }

    async findByEmail(req, res) {
        let user = await UserService.findByEmail(req);
        return res.status(user.status).json(user);
    }
}

export default UserController;