
var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app){
    
    app.get("/api/friends", function(req, res){
       res.json(friends) ;   
    });


    app.post("/api/friends", function(req, res){


        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };


        var userData = req.body;
        var userScores = userData.scores;


        
/*
        var matchName = "";
        var matchImage = "";
        var totalDifference = 10000;

*/

        console.log(userScores);

        var totalDifference = 0


        for (var i = 0; i < friends.length; i++){


            
        var totalDifference = 0

        for(var j = 0; j < friends[i].scores[j]; j++){

            totalDifference += Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[j])));
        
            if (totalDifference <= bestMatch.friendDifference){

               bestMatch.name = friends[i].name;
               bestMatch.photo = friends[i].photo;
               bestMatch.friendDifference = totalDifference;
        }
    } 
 }
    friends.push(userData);

    res.json(bestMatch);

     });
};
