var data = require("../test.json");

exports.viewExercises = function(req, res) { 
  console.log(data);
  var name = req.params.name; 
  res.render("exercises", data);
}

function initializePage() {
	// your code here
	$(".data{{id}}").click(function(){
		ga("send", "event", "collapse", "click");
	});
}

