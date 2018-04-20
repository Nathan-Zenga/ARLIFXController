var express = require('express'),
	router = express.Router();

router.get('/', function(req, res){
	res.redirect('/cam');
});

router.get('/cam', function(req, res){
	res.render('cam');
});

module.exports = router;