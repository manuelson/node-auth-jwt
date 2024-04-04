const Joi = require('joi');
const validatorHandler = require('../middlewares/validatorHandler');
const { verify: verifyToken } = require('../utils/token');

const signup = (req, res, next) => {
    const schema = Joi.object().keys({
        firstname: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(50)
            .required(),
        lastname: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(50)
            .required(),
        email: Joi.string()
            .trim()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
    });
    validatorHandler(req, res, next, schema);
};

const authRequired = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || !verifyToken(token)) {
        return res.status(401).send({
            status: 'error',
            message: 'You are not authorized'
        });
    }
    next();
}

const signin = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .trim()
            //.email()
            .required(),
        password: Joi.string()
            .trim()
            //.pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
    });
    validatorHandler(req, res, next, schema);
};

module.exports = {
    signup,
    signin,
    authRequired
};
