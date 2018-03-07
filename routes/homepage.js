
var data = require("../test.json");

var quotes = [
'i am',
'a quote',
'yes'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementbyId('quoteDisplay').innerHTML = quotes[randomNumber];
}

exports.viewHomepage = function(req, res){
  var name = req.params.name; 
	res.render('homepage')
};