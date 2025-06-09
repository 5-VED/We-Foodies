const { UserModel} = require('../Models');

class UserRepository {
    static async findUserByEmail(email) {
        return UserModel.findOne({ email, is_deleted: false, is_active: true }).populate('role');
    }

    static async findUserByEmailAndPhone(email, phone) {
        return UserModel.findOne({ email, phone });
    }

    static async createUser(userData) {
        return UserModel.create(userData);
    }
    
}

module.exports = UserRepository; 