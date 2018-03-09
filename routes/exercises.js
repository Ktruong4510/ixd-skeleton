var data = require("../test.json");

exports.viewExercises = function(req, res) { 
  data["viewAlt"] = true;
  res.render("exercises", data);
}

exports.viewAlt = function(req, res) { 
  data["viewAlt"] = false;
  res.render("exercises", data);
};

