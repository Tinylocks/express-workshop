var fs = require('fs');
var express = require("express");
var app = express();

var formidable = require('express-formidable');

app.use(express.static("public"));

app.use(formidable());

app.post('/create-post', function (req, res) {
    console.log(req.fields);
    fs.readFile(__dirname + '/data/posts.json', 
    function (error, file) {console.log(file.toString());
    var parsedFile = JSON.parse(file);
    // do something
    
    var timestamp = Date.now();
    var blogpost = req.fields.blogpost;
    var newpost = timestamp + ":" + blogpost;
    console.log(newpost);
    
    fs.writeFile(__dirname + '/data/posts.json', yourData, function (error) {
    // do something
    });
});


    // fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    // console.log(file.toString());
    // // do something
    // });
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080. Ready to accept requests!");
});