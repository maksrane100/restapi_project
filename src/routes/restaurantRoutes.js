var express = require('express');
var app = express();
var restaurantRouter = express.Router();

// Require Restaurant model in our routes module
var Restaurant = require('../models/Restaurant');

// Defined store route
restaurantRouter.route('/add').post(function (req, res) {
  var restaurant = new Restaurant(req.body);
     restaurant.save()
    .then(restaurant => {
    res.status(200).json(restaurant);
    })
    .catch(err => {
    res.status(500).send("unable to save to database");
    });
});


restaurantRouter.route('/').get(function (req, res) {
  Restaurant.find(function (err, restaurant){
    if(err){
      console.log(err);
    }
    else {
      res.json(restaurant);
    }
  });
});

// Defined edit route
restaurantRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Restaurant.findById(id, function (err, restaurant){
      res.json(restaurant);
  });
});

//  Defined update route
restaurantRouter.route('/update/:id').post(function (req, res) {
	var id = req.params.id;
	console.log('id:'+id);
	console.log('req.body:'+req.body);
	Restaurant.findByIdAndUpdate(id,req.body,{new: true},
		(err, restaurant) => {
			console.log('err:'+err);
			if (err) return res.status(500).send(err);
			return res.send(restaurant);
		}
	);
	console.log('Update complete');
});

// Defined delete | remove | destroy route
restaurantRouter.route('/delete/:id').get(function (req, res) {
  Restaurant.findByIdAndRemove({_id: req.params.id},
	   function(err, restaurant){
		if(err) res.json(err);
		else res.json('Successfully removed restaurant');
	});
});

module.exports = restaurantRouter;