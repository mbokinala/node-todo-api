const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
// 		console.log('Saved todo', doc);
// }, (err) => {
// 	console.error('Unable to save todo', err);
// });

var otherTodo = new Todo({
	text: 'Feed the cat',
	completed: true,
	completedAt: 123
});

otherTodo.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
}, (err) =>{
	console.error('Unable to save', err);
});
