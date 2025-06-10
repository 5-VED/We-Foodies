const UserRepository = require('../Repository/User.repository');
const ApiError = require('../Config/ErrorResponse');
const { HTTP_CODES } = require('../Constants/enums');
const message = require('../Constants/response_message');
const RestaurantRepository = require('../Repository/Restaurant.repository');

class RestaurantService {
  static async registerRestaurant(payload) {
    try {
        
    } catch (error) {
      logger.error();
    }
  }
}

module.exports = RestaurantService;
