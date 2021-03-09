const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/db';
let port = process.env.PORT || 9000;

const app = express();

mongoose.connect(url, {useNewUrlParser:true});

const con = mongoose.connection;
con.on('open',function(){
    console.log('connected....');
});

app.use(express.json());

const routeto = require('./routers/students');
app.use('/students',routeto);


app.listen(port, function(){
    console.log('Server started....');
});
