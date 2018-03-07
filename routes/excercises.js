var data2 = require("../test.json");

exports.viewExcercises = function(req, res) { 
  data2["viewAlt"] = false;
  res.render("excercise", data2);
}

exports.viewAlt = function(req,res){
	data2["viewAlt"] = true;
	res.render("excercise", data2);
};
