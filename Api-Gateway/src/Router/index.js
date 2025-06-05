const router = require('express').Router();

router.use('/user',require('./User.routes'))

router.use('/role',require('./Role.routes'))

module.exports = router;