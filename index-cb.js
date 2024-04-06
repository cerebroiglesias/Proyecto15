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
    db.collection('clientes').find({}).toArray().then((clientes) => {
        console.log("----------------------CLIENTES--------------------------");
        console.log(clientes);
        console.log("----------------------FIN CLIENTES--------------------------");
        db.collection('articulos').find({}).toArray().then((articulos) => {
            console.log("----------------------ARTICULOS--------------------------");
            console.log(articulos);
            console.log("----------------------FIN ARTICULOS--------------------------");
        }).catch((error) => {
            console.log(error)
            client.close();
        });
    }).catch((error) => {
        console.log(error)
        client.close();
    });

}

module.exports = client;
