

exports.viewStrength = function(req, res) { 
  var name = req.params.name; 
  res.render("strength");
}