var express=require("express");
var path=require("path");

var app = express();

var PORT = process.env.PORT || 8080;
//fill in the port with the heroku version

app.get("/", function(req, res) {

    
});


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
