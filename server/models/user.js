var mongoose = require('mongoose');

var User = mongoose.model('User', {
	name: {
		type: String,
		default: ''
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	password: {
		type: String,
		default: ''
	}
});

module.exports = { User };
