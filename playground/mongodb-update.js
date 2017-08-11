// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if(error){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('connected to MongoDB server');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('598d19cfa0b615eb4c9fe0b0')
	}, {
			$set: {
				completed: false
			}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	}, (err) => {

	});

	// Close the connection to the DB
	// db.close();
});
