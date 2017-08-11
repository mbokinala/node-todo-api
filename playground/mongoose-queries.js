const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '598df26216de446089bd0c1b11';
//
// if(!ObjectID.isValid(id)){
// 	console.error('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// }).catch((err) => console.error(err));
//
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	if(!todo){
// 		return console.error('id not found');
// 	}
// 	console.log('Todo', todo);
// }).catch((err) => console.error(err));

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.error('id not found');
// 	}
// 	console.log('Todo by ID', todo);
// }).catch((err) => console.error(err));

User.findById('598ce7baa96fef18a524851b').then((user) => {
	if(!user){
		return console.error('ID not found');
	}
	console.log('User by id: ', JSON.stringify(user, undefined, 2));
}).catch((err) => console.error(err));
