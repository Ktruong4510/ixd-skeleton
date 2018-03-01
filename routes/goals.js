var data = require("../goals.json");


exports.viewGoals = function(req, res) { 
  var name = req.params.name; 
  res.render("goals", data);

}

 /* const fs = require('fs');
	var m = JSON.parse(fs.readFileSync('goals.json').toString());
	Object.keys(m).forEach(function(p){
    p.description = m.description;
	});
	fs.writeFile('goals.json', JSON.stringify(m));


*/
