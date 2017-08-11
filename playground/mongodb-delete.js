// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if(error){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.error(err);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.error(err);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.error(err);
	// });

	// Challenge
	db.collection('Users').deleteMany({name: 'Manav'}).then((result) => {
		console.log(result);
	}, (err) => {
		console.error(err);
	});

	db.collection('Users').findOneAndDelete({name: 'Abinav'}).then((result) => {
		console.log(result);
	}, (err) => {
		console.error(err);
	});

	// Close the connection to the DB
	// db.close();
});
