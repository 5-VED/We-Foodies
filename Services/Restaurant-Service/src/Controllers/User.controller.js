const UserService = require('../Services/User.service');
const { HTTP_CODES } = require('../Constants/enums');
const message = require('../Constants/response_message');

module.exports = {
  signup: async (req, res) => {
    try {
      const result = await UserService.signup(req.body);
      return res.status(HTTP_CODES.OK).json({
        success: true,
        message: message.USER.CREATED,
        data: result,
      });
    } catch (error) {
      return res.status(error.statusCode || HTTP_CODES.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message || message.ERROR.INTERNAL_SERVER,
        error: error,
      });
    }
  },
};
