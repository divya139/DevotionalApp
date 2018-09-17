var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();

var api = require('./server/api');

//set parser as middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/uploads',express.static('uploads'));
app.use(express.static(path.join(__dirname,'dist')));

app.use('/',api);
app.get('*'),(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
  
}
var port = process.env.PORT || '3000';
app.set('port',port);

var server = http.createServer(app);
server.listen(port,()=>console.log('sever is running at port 3000'));

