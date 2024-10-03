//chia 2 bản dev và product ở đây

const dev = {
    app: {
        port: process.env.DEV_APP_PORT,
    },

    db: {
        name: process.env.DEV_APP_NAME,
        pass: process.env.DEV_APP_PASS
    }
}

const prod = {
    app: {
        port: process.env.PROD_APP_PORT,
    },

    db: {
        name: process.env.PROD_APP_NAME,
        pass: process.env.PROD_APP_PASS
    }
}

const config = { dev, prod };

const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
