const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname,'/templates/views') 
app.set('views', viewsPath)

app.get("" , (req, res) => {
    
    res.render("index");
});

app.get("/form" , (req, res) => {
    console.log(req.query)
    res.render("form");
});

app.post("/form" , (req, res) => {
    console.log(req.body.name);
    res.render("form");
});

app.get("/test" , (req, res) => {
    
    res.send('<h1>Welcome to site, test Pass...</h1>');
});


// Page 404
// app.get('*', (req, res) => { 
//     res.redirect(303,"/") })



app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
