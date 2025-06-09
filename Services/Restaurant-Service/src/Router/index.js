const router = require('express').Router();

router.use('/restaurant', require('./Restaurant.routes'));

module.exports = router;
