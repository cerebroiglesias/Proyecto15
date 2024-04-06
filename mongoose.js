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

/**
 * Connects to the MongoDB database using the client and returns the connected database.
 *
 * @return {Promise<Db>} The connected MongoDB database.
 */
async function connectDB() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const db = await client.db(process.env.CLUSTER)
        db.command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return db;
        
    } catch(e) {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

module.exports = {
    client,
    connectDB
};
