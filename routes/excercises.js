var data = require("../test.json");

exports.viewExcercises = function(req, res) { 
  data["viewAlt"] = false;
  var name = req.params.name; 
  res.render("excercise", data);
}

exports.viewAlt = function(req,res){
	data["viewAlt"] = true;
	res.render('excercise', data);
};



