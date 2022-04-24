const express = require('express');
const app = express();
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
require('dotenv').config();


app.get('/',(req,res)=>{
    res.send('Ema - Jhon server running..');
})

app.listen(port,()=>{
    console.log('Listening to port: ',port);
})