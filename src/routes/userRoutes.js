var express = require('express');
var app = express();
var userRouter = express.Router();

// Require User model in our routes module
var User = require('../models/User');

// Defined store route
userRouter.route('/add').post(function (req, res) {
  var user = new User(req.body);
      user.save()
    .then(user => {
    res.status(200).json(user);
    })
    .catch(err => {
    res.status(500).send("unable to save to database");
    });
});


userRouter.route('/').get(function (req, res) {
  User.find(function (err, user){
    if(err){
      console.log(err);
    }
    else {
      res.json(user);
    }
  });
});

// Defined edit route
userRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRouter.route('/update/:id').post(function (req, res) {
	var id = req.params.id;
	console.log('id:'+id);
	console.log('req.body:'+req.body);
	User.findByIdAndUpdate(id,req.body,{new: true},
		(err, user) => {
			console.log('err:'+err);
			if (err) return res.status(500).send(err);
			return res.send(user);
		}
	);
	console.log('Update complete');
});

// Defined delete | remove | destroy route
userRouter.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id},
	   function(err, user){
		if(err) res.json(err);
		else res.json('Successfully removed user');
	});
});

module.exports = userRouter;