var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var http = require('http');
var cors = require('cors');
var app = express();

var api = require('./server/api');

//set parser as middleware
app.use(bodyparser.json());
app.use(cors()); 
app.use(bodyparser.urlencoded({extended:false}));
app.use('/uploads',express.static('uploads'));
app.use(express.static(path.join(__dirname,'dist')));

app.use('/',api);
app.get('*'),(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
  
}
app.use(function(req,res,next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
})
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
    next();
});
var port = process.env.PORT || '3000';
app.set('port',port);

var server = http.createServer(app);
server.listen(port,()=>console.log('sever is running at port 3000'));

