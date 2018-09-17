var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const musicInstance = require('../models/musicModel.js');
const multer = require('multer');


//const upload = multer({dest:'uploads/'});
const storage = multer.diskStorage({
 destination:function(req,file,cb)
 {
     cb(null, './uploads/');
 },
 filename: function(req,file,cb){
     cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname);
 }
});
const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 *5  //only files 5 megabytes
}});

const connection = (closure)=>{
    return MongoClient.connect('mongodb://localhost:27017/musicDb', (err,db)=>{
        if(err)
        {
            return console.log(err);
        }
        closure(db);
    });
}
let response = {
    status:200,
    message:null,
    data:[]
}
var sendError = (err,res)=>{
    response.status = 501;
    response.message = typeof err == 'onject'? err.message: err;
    res.status(501).json(response);
}
router.get('/musicDetails',(req,res)=>{
    connection((db)=>{
        db.collection('musicDetails').find().toArray().then((musicDetails)=>{
            response.data = musicDetails;
         
            res.json(response);
        })
    })
})
router.get('/musicDetails/:id',(req,res)=>{
    connection((db)=>{
        db.collection('musicDetails').find({id: req.params.id}).toArray().then((musicDetails)=>{
            response.data = musicDetails;
            console.log(response.data);
            res.json(response);
        })
    })
})
router.post('/insert',upload.single('image'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    var newRecord =  new musicInstance();
    newRecord.id = req.body.id;
    newRecord.title = req.body.title;
    newRecord.type = req.body.type;
    newRecord.file = req.body.file;
    newRecord.image = req.file.path;
    connection((db)=>{
        db.collection('musicDetails').insertOne(newRecord, function(err,res){
            
            if(err) throw err;
            console.log("Inserted record");
           
          
        })
    })
})

module.exports = router;