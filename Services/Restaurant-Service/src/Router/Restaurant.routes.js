const UserController = require('../Controllers/User.controller');
const auth = require('../Middlewares/Auth.middleware');
const { signupSchema } = require('../Validators/User.validator');
const { validateRequest } = require('../Middlewares/Validlidator.middleware');
const { RestaurantController } = require('../Controllers');

const router = require('express').Router();

router.post('/register', RestaurantController.register);

module.exports = router;
