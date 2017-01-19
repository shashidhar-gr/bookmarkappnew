var express = require('express');
var bodyparser = require('body-parser');
var expressJwt = require('express-jwt');
var jsonwebtoken = require('jsonwebtoken');
var app = express();
app.use(bodyparser.json());
app.use(express.static('public'));

//app.use(expressJwt({secret: "shashidhar"}).unless({path: ['/', '/signup', '/login']}))

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html');
});

app.post('/profile', function(req, res) {
	return res.status(200).json({ success: true, message: req.user});
});

app.post('/login', function(req, res) {
	if(req.body.username === "shashidhar" && req.body.password === "password") {
		var token = jsonwebtoken.sign({username: req.body.username}, "shashidhar", {expiresIn: 60});
		return res.status(200).json({ success: true, message: "Authenticated successfully!!", token: token});
	}
	return res.status(400).json({ success: false, message: "Authentication failed"});
});

app.listen(3000, function() {
	console.log("server listening on port 3000.");
});

app.use(function(err, req, res, next) {
	return res.status(400).json({ success: false, message: err});
});