const app = require("./src/app");
const config = require("./src/config");

const server = app.listen(config.port, () => {
    console.log(`WSV project start with port start with ${config.port}`);
});

//khai báo procress
process.on('SIGINT', () => {
    console.log('Received SIGINT. Closing server...');
    server.close(() => console.log(`Exit server express`));
});