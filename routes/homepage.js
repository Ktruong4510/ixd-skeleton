
var data = require("../test.json");

exports.viewHomepage = function(req, res){
  console.log(data);
  var name = req.params.name; 
	res.render('homepage')
};