const exp = require("constants");
var express = require("express");
var app = express();
var port = process.env.port || 3000;





//setup a route for static files
app.use(express.static(__dirname+"/static"));

//maine route for the site
app.get("/", function(req, res){
    res.sendFile(__dirname+"/static/index.html")
});

app.get("/home", function(req, res){
    res.send("This will be our homepage for now");
});

app.listen(port, function(){
    console.log("Running on localhost " + port);
});

