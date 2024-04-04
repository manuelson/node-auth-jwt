const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../utils/secrets');
const { logger } = require('./logger');

const generate = (id) => jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: '1d' });

const verify = (token) => {
    try {
        jwt.verify(token, JWT_SECRET_KEY);
        return true;
    } catch (error) {
        return false;
    }
}

const decode = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET_KEY)
    } catch (error) {
        logger.error(error);
    }
};

module.exports = {
    generate,
    decode,
    verify
}
