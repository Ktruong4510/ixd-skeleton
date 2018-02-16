var data = require("../goals.json");

exports.viewGoals = function(req, res) { 
  console.log(data);
  var name = req.params.name; 
  res.render("goals", data);
}