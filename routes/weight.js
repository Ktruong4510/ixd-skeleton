

exports.viewWeight = function(req, res) { 
  var name = req.params.name; 
  res.render("weight");
}