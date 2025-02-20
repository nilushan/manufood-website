module.exports = {
    files: ['_site/**/*'],
    server: {
        baseDir: '_site',
        serveStaticOptions: {
            cacheControl: false
        }
    },
    port: 3000,
    host: '0.0.0.0',
    open: false,
    notify: false,
    ghostMode: false
};