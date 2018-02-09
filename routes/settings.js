

exports.viewSettings = function(req, res) { 
  var name = req.params.name; 
  res.render("settings");
}