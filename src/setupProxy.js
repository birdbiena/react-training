const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    let proxyContent = [
        '/auth',
        '/api'
    ];
    
    let prxoxyOptions = {
        target: 'http://0.0.0.0:3001',
        changeOrigin: true,
        autoRewrite: true,
        secure: false
    };
    
    app.use(proxyContent, proxy(prxoxyOptions));
};