var routing = require("../data/friends.js")

var apiFriends = []

module.exports = {
    getSurvey: app.get("/api/friends", function (req, res) {
        res.JSON(apiFriends)
    }), 
    pushSurvey: app.post("/api/friends", function (req, res) {

        console.log(req.body);

    }),
    apiFriends: apiFriends
}