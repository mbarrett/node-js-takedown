var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.render('index', {
		title: 'Node JS Takedown!',
		age: request.params.age
	});
});

router.get('/200', function(request, response){
	response.send(200);
});

router.get('/500', function(request, response){
	response.send(500);
});

module.exports = router;