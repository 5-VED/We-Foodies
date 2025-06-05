const {RoleController} = require('../Controllers');

const router = require('express').Router();

router.post("/add-role", RoleController.addRole)

router.delete("/remove-role", RoleController.removeRole)

module.exports = router;