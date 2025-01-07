const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');  
});

app.get('/about', (req, res) => {
    res.render('about.ejs');  
});    

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.get('/services', (req, res) => {
    res.render('services.ejs'); 
});

app.listen(port, () => {
    console.log(`listining to the port ${port}`);
});
