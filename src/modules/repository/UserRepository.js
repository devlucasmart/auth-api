import User from "../model/user/User.js";

class UserRepository {
    async findById(id) {
        try{
            return await User.findOne({ where: { id }})
        } 
        catch {
            console.error(err.message);
            return null;
        }
    }

    async findByEmail(email) {
        try{
            return await User.findOne({ where: { email }})
        } 
        catch {
            console.error(err.message);
            return null;
        }
    }
}

export default new UserRepository();