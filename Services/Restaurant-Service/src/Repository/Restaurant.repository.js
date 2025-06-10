const { UserModel, RestaurentModel } = require('../Models');

class RestaurantRepository {
  static async findUserByEmail(name) {
    return await RestaurentModel.findOne({ name, is_deleted: false, is_active: true }).populate(
      'role'
    );
  }

  static async create(payload) {
    return await RestaurentModel.create(payload);
  }
}

module.exports = RestaurantRepository;
