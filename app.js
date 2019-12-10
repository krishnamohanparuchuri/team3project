const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));

app.use('/static',express.static('public'));
app.use('/static/css',express.static('public/css'));
app.use('/static/images',express.static('public/images'));
app.use('/static/js',express.static('public/js'));
app.use('/static/html',express.static('public/html'));

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

app.get('/submission',function(req,res){
    res.render('submission');
});

app.listen(6000);