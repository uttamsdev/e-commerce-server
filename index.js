const express = require('express');
const app = express();
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
require('dotenv').config();



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.86nll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        await client.connect();
        const productCollection = client.db('emaJhon').collection('product');


        //Read all data
       app.get('/product', async(req,res)=>{
        const query = {};
        const cursor = productCollection.find(query);
        const products = await cursor.toArray();
        res.send(products);
       })

    }
    finally{

    }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('Ema - Jhon server running..');
})

app.listen(port,()=>{
    console.log('Listening to port: ',port);
})