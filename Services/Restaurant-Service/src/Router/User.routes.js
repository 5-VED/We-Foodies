const UserController = require('../Controllers/User.controller');
const auth = require('../Middlewares/Auth.middleware');
const {
  signupSchema,
} = require('../Validators/User.validator');
const { validateRequest } = require('../Middlewares/Validlidator.middleware');

const router = require('express').Router();

router.post('/signup', validateRequest(signupSchema), UserController.signup);

module.exports = router;
