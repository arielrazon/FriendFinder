var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes")


var app = express();

var PORT = process.env.PORT || 8080;
//fill in the port with the heroku version

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html");

});


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
