const express = require('express');
//const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

app.engine('html', (filePath, options, callback) => {
    // Define the rendering function
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        // This is a simple rendering engine, so it doesn't support any templating features
        return callback(null, content.toString());
    });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home'); // Render the index.html file
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});


app.listen(3000, () => {
    console.log('App listening at port 3000');
});
