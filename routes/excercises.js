var data2 = require("../test.json");

exports.viewExcercises = function(req, res) { 
  res.render("excercise", data2);
};