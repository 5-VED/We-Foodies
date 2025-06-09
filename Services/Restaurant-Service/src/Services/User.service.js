const UserRepository = require('../Repository/User.repository');
const ApiError = require('../Config/ErrorResponse');
const { HTTP_CODES } = require('../Constants/enums');
const message = require('../Constants/response_message');

class UserService {
    static async signup(userData) {
        const existingUser = await UserRepository.findUserByEmailAndPhone(userData.email, userData.phone);
        if (existingUser) {
            throw new ApiError(HTTP_CODES.BAD_REQUEST, message.USER.ALREADY_EXISTS);
        }

        return UserRepository.createUser(userData);
    }
}

module.exports = UserService; 