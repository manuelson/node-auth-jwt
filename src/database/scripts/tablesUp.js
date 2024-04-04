const { logger } = require('../../utils/logger');
const { createTableUsers: createTableUsers } = require('../queries');

(() => {
    require('../../config/db.config').query(createTableUsers, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table users created!');
        process.exit(0);
    });
})();
