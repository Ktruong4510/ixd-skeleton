

exports.viewFriends = function(req, res) { 
  var name = req.params.name; 
  res.render("friends");
}