const express = require('express');
const path = require('path');
const app = express();


app
    .use(express.static(__dirname + "/static"))
    .use(express.static(__dirname + '/node_modules/bootstrap'))
    .use(express.static(__dirname + '/node_modules/jquery'))
    .use(express.static(__dirname + '/node_modules/popper.js'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cars', (req, res) => {
    let cars_array = [
        {name: 'Car 1', image: 'car-1.png'},
        {name: 'Car 2', image: 'car-2.png'},
        {name: 'Car 3', image: 'car-3.png'},
        {name: 'Car 4', image: 'car-4.png'},
        {name: 'Car 5', image: 'car-5.png'},
        {name: 'Car 6', image: 'car-6.png'}
    ];
    res.render('cars', {cars: cars_array});
});
app.get('/cats', (req, res) => {
    let cats_array = [
        {name: 'Behold The Greatest', image: 'cat-1.png'},
        {name: 'Cat 2', image: 'cat-2.png'},
        {name: 'Cat 3', image: 'cat-3.png'},
        {name: 'Cat 4', image: 'cat-4.png'},
        {name: 'Cat 5', image: 'cat-5.png'},
        {name: 'Cat 6', image: 'cat-6.png'}
    ];
    res.render('cats', {cats: cats_array});
});

app.get('/cars/new', (req,res) => {
    res.render('form');
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});