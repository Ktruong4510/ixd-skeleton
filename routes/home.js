
// Get all of our friend data

exports.viewHome = function(req, res){
  var name = req.params.name; 
	res.render('home');
};