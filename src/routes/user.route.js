const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const userController = require('../controllers/user.controller');
const { authRequired: authRequiredValidator } = require('../validators/auth');

router.route('/:email')
    .get(authRequiredValidator, asyncHandler(userController.getByEmail));

module.exports = router;
