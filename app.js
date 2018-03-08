	
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var add = require('./routes/add');
var page = require('./routes/page');
var settings = require('./routes/settings');
var goals = require('./routes/goals');
var friends = require ('./routes/friends');
var schedule = require ('./routes/schedule');
var exercises = require ('./routes/exercises');
var exercises2 = require ('./routes/exercises2');
var exercises3 = require ('./routes/exercises3');
var strength = require ('./routes/strength');
var muscle = require ('./routes/muscle');
var weight = require ('./routes/weight');
var stamina = require ('./routes/stamina');
var habit = require ('./routes/habit');
var homepage = require('./routes/homepage');
var pagedimensionstest = require('./routes/pagedimensionstest');
var test = require('./routes/test');
var test2 = require('./routes/test2');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/page/', page.viewPage);
app.get('/settings.html', settings.viewSettings);
app.get('/goals.html', goals.viewGoals);
app.get('/friends.html', friends.viewFriends);
app.get('/schedule.html', schedule.viewSchedule);
app.get('/exercises.html', exercises.viewExercises);
app.get('/exercises2.html', exercises2.viewExercises2);
app.get('/exercises3.html', exercises2.viewExercises2);
app.get('/viewAlt', exercises.viewAlt);
//app.get('/excercises.html', excercises.addExcercises);
app.get('/goals/strength.html', strength.viewStrength);
app.get('/goals/muscles.html', muscle.viewMuscle);
app.get('/goals/weight.html', weight.viewWeight);
app.get('/goals/stamina.html', stamina.viewStamina);
app.get('/goals/habit.html', habit.viewHabit);
//app.get('/add', add.addExcercise);
app.post('/homepage.html', homepage.viewHomepage);
//app.post('/pagedimensionstest.html', pagedimensionstest.viewPagedimensionstest);
app.get('/add', add.addFriend);
app.get('/homepage.html', homepage.viewHomepage);
app.get('/pagedimensionstest.html', pagedimensionstest.viewPagedimensionstest);
//app.get('/add', excercises.addFriend);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
