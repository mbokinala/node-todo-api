// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if(error){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('connected to MongoDB server');

	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (error, result) => {
		if(error){
			return console.error('Unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.collection('Users').insertOne({
		name: 'Manav',
		age: 12,
		location: 'San Ramon'
	}, (error, result) => {
			if(error){
				return console.error('Unable to insert todo', err);
			}
			console.log(result.ops[0]._id.getTimestamp());
	});

	db.close();
});
