const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// }).catch((err) => console.error(err));


// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('598f46b8f8ec565492f4b018').then((todo) => {
	console.log(todo)
});
