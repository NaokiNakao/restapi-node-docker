const app = require('./app');
const port = 8080;

async function main() {
    await app.listen(port);
    console.log('Server on port 8080');
}

main();