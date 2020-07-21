const express= require('express');
const mustacheExpress=require('mustache-express');

const app=express();
const bodyParser=require('body-parser');
const {Client} = require('pg');



const mustache=mustacheExpress();
mustache.cache=null;
app.engine('mustache',mustache);
app.set('view engine','mustache');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))

app.get('/add',(req,res)=>{
res.render('meds-form');

});

app.post('/meds/add',(req,res)=>{
res.redirect('/meds');
console.log('post body',req.body);
const Client =new Client({
    user:'postgres',
    host:'localhost',
    database:'medical1',
    password:123,
    port:5432,

});
client.connect()
.then())=>{
console.log('Connection Complete');
const sql='INSERT INTO meds (name,count,brand) VALUES($1,$2,$3)';
const params=['cyclopam',100,'Sun'];
return client.query(sql,params);
})
 .then ((result))=>{
     console.log('results?',result);
       res.redirect('/meds');
    });


app.get('/meds',(req,res)=>{
  res.render('meds');

});
app.listen(5001,()=>{

console.log('Listening to port 5001');
})
