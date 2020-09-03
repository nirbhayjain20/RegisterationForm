require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

//const mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:xbESrDdpEgmgSGFU@cluster0.h5bzb.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, (err,db)=>{
  if(err) throw err;
  console.log("Database Created!");
  db.close();
});




const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.render('register')
})

app.post('/register',(req,res)=>{
    var name = req.body.fname;
    // console.log(name);
    MongoClient.connect(url,(err,db)=>{
      if(err) throw err;
      var dbo = db.db("valorant");

    })
    res.send('success');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})