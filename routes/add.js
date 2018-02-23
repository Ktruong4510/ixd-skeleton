var data = require("../goals.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {"description":req.query.description};
	data.goals.weekly.push(newFriend);
	console.log(data);
	res.render('index',data);
 }