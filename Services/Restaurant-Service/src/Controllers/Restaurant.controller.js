const { RestaurantService } = require('../Services');
const ApiError = require('../Config/ErrorResponse');

module.exports = {
  register: async (req, res) => {
    try {
      const response = await RestaurantService.registerRestaurant(req.body);
      return res.status().json();
    } catch (error) {
      logger.error();
      return res.status().json();
    }
  },
};
