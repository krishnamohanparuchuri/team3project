const express = require('express');
const app = express();


app.use('/static',express.static('public'));
app.set('view engine','ejs');

app.get('/home',function(req,res){
    res.render('home');
});

app.get('/aboutus',function(req,res){
    res.render('aboutus');
});

app.get('/login',function(req,res){
    res.render('login');
});

app.get('/signup',function(req,res){
    res.render('signup');
});

app.get('/contactus',function(req,res){
    res.render('contactus');
});


app.listen(8080);