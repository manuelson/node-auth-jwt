const app = require('./app');
const { logger } = require('./utils/logger');
const https = require('https');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// Lee los archivos del certificado y la clave
const privateKey = fs.readFileSync('/home/manu/sites/key.pem', 'utf8');
const certificate = fs.readFileSync('/home/manu/sites/cert.pem', 'utf8');

const httpsServer = https.createServer({ key: privateKey, cert: certificate }, app);

httpsServer.listen(PORT, () => {
    console.log('HTTPS Server running on port 3000');
});
