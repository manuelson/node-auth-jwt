const app = require('./app');
const { logger } = require('./utils/logger');
const https = require('https');
const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const {
    KEY_ROUTE,
    CERT_ROUTE,
    ENVIRONMENT
} = process.env;

const httpServer = http.createServer(app);

if (ENVIRONMENT === 'production') {
    const options = {
        key: fs.readFileSync(KEY_ROUTE),
        cert: fs.readFileSync(CERT_ROUTE),
    };

    const httpsServer = https.createServer(options, app);

    httpServer.listen(80, () => {
        console.log('HTTP server');
    });

    httpsServer.listen(443, () => {
        console.log('HTTPS Server running on port: ' + PORT);
    });

} else {
    httpServer.listen(80, () => {
        console.log('HTTP server');
    });
}
