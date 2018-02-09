
exports.viewHabit = function(req, res) { 
  var name = req.params.name; 
  res.render("habit");
}