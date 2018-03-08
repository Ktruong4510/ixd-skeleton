var data = require("../test.json");

exports.viewExercises = function(req, res) { 
  console.log(data);
  var name = req.params.name; 
  res.render("exercises", data);
}