const express = require('express');
const app = express();
const port = process.env.PORT||3000;

var http = require('https');
var server = http.Server(app);

const apiKey = process.env.myApiKey;

app.use('/',express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, ()=>console.log(`Example app listening in port ${port}!`));