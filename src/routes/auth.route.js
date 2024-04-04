const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const checkEmail = require('../middlewares/checkEmail');
const { signup: signupValidator, signin: signinValidator } = require('../validators/auth');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');


router.route('/register')
    .post(signupValidator, asyncHandler(checkEmail), asyncHandler(authController.register));

router.route('/login')
    .post(signinValidator, asyncHandler(authController.login));

router.route('/:email')
    .get(asyncHandler(userController.get));

module.exports = router;
