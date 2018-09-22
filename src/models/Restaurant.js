var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Restaurant = new Schema({
   
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
	highlight: {
        type: String,
        required: true
    },
	food: [{
		type: String
	}],
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
	openathour: {
        type: Number
    },
	openatminute: {
        type: Number
    },
	closeathour: {
        type: Number
    },
	closeatminute: {
        type: Number
    },	
	star: {
        type: Number
    },
    createdAt: {
        type: Date,
		default: Date.now
    }
});


module.exports = mongoose.model('Restaurant', Restaurant);