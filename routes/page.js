

exports.viewPage = function(req, res) { 
  var name = req.params.name; 
  res.render('page', {
  'pageName': name,
   'image': 'img1.jpg',
  });

}