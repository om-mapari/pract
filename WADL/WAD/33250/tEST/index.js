const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.route("/").get((req,res) => {
    res.send("<html><head><title>Nodejs Assignment</title></head><body><h1>Nodejs Assignment</h1><p>This is a static website</p></body></html>")
})

app.listen(3000);

module.exports = app;