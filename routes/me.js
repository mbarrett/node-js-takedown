var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.render('me', {
		title: 'Node JS Takedown!',
		age: request.query.age
	});
});

router.get('/:age', function(request, response){
	response.render('me', {
		title: 'Node JS Takedown!',
		age: request.params.age
	});
});

module.exports = router;