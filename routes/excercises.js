var data = require("../test.json");

exports.viewExcercises = function(req, res) { 
  console.log(data);
  var name = req.params.name; 
  res.render("excercise", data);
}
