// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if(error){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('connected to MongoDB server');

	db.collection('Todos').find().toArray();

	db.close();
});
