const app = require("./src/app");
const port = process.env.PORT || 3056;

const server = app.listen(port, () => {
    console.log(`WSV project start with port start with ${port}`);
});

//khai báo procress
process.on('SIGINT', () => {
    console.log('Received SIGINT. Closing server...');
    server.close(() => console.log(`Exit server express`));
});