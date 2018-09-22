var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
   
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
	gender: {
        type: String,
        enum: ["male", "female"]
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
	age: {
	  type: Number,
	  default: 0
	},
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
	address: {
			 address1: {
			  type: String,
			  default: ""
			},
			address2: {
			  type: String,
			  default: ""
			},
			city: {
			  type: String,
			  default: ""
			},
			state: {
			  type: String,
			  default: ""
			},
			zip: {
			  type: String,
			  default: ""
			},
			country: {
			  type: String,
			  default: ""
			}
		},
    createdAt: {
        type: Date,
		default: Date.now
    }
});


module.exports = mongoose.model('User', User);