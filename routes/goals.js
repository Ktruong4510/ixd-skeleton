

exports.viewGoals = function(req, res) { 
  var name = req.params.name; 
  res.render("goals");
}