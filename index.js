const {
    client,
    connectDB
} = require('./mongoose');

const dotenv = require('dotenv').config();

async function main() {
    const db = await connectDB();

    const PORT = process.env.PORT || 3000;

    const server = app.listen(PORT, () => {
        console.log(`Server trabajando en http://localhost:${PORT}`);
    })

    server.on('error', (error) => {
        console.log(`Error en servidor ${error}`);
    })
}

main();