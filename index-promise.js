const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.MONGODB;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
let db;
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        db = await client.db(process.env.CLUSTER)
        db.command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        main();
        
    } catch(e) {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

let main = () => {

    let clientes = db.collection('clientes').find({})

    console.log("----------------------CLIENTES--------------------------");
    for await(const cliente of clientes) {
        console.log(cliente);
    }
    console.log("----------------------FIN CLIENTES--------------------------");

    let articulos = db.collection('articulos').find({});

    console.log("----------------------ARTICULOS--------------------------");
    for await(const articulo of articulos) {
        console.log(articulo);
    }
    console.log("----------------------FIN ARTICULOS--------------------------");
}

module.exports = client;
