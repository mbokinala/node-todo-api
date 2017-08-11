// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if(error){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('598d19cfa0b615eb4c9fe0b0');
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// });

	db.collection('Users').find({name: 'Manav'}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos')
	});

	// Close the connection to the DB
	// db.close();
});
