const express = require('express')
const app = express()
const port = 3000


const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.render('register')
})

app.post('/register',(req,res)=>{
    var name = req.body.fname;
    console.log(name);
    res.send('success');
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})