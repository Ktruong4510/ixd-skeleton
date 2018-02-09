
/*
 * GET home page.
 */

exports.view = function(req, res){
   res.render('index', {
   	 'pages': [
      { 'name': '',
        'image': 'img1.jpg',
        'id': 'page1'
      }
     ]
 });
};