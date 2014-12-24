var Express = require('express'),
	bodyParser = require('body-parser'),
	app = Express();

var port = 9030;


app.use(Express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.listen(port, function(){
	console.log('Now listening on port ' + port)
})