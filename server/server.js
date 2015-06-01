var Express = require('express'),
	bodyParser = require('body-parser'),
	app = Express();

var port = process.env.EXPRESS_PORT || 9001;


app.use(Express.static(__dirname + '/../public'));
app.use(bodyParser.json());

console.log(port);
app.listen(port, function(){
	console.log('Now listening on port ' + port)
})
