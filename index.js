const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()
require('dotenv').config()
app.use(cors())
app.use(express.json())

//plant_shop
//nkIpqvDntJXA4Osj


//MongoDB Cluster


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://plant_shop:nkIpqvDntJXA4Osj@cluster0.cp7orzr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Plant Shop successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`app is runnig on port ${port}`)
})