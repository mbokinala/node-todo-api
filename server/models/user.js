const mongoose = require('mongoose');
var User = mongoose.model ('User', {
	email: {
		type: String,
		required: false,
		minlength: 5,
		trime: true
	}
});

module.exports = {User};
