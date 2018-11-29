// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);
console.log(obj.getTimestamp());

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	(err, client) => {
		if (err) {
			return console.log('Unable to connect to Mongo DB server');
		}
		console.log('Connected to MongoDB server');

		const db = client.db('TodoApp');

		// db.collection('Todos').insertOne({
		//   text: 'Bla bla bla.',
		//   completed: false
		// }, (err, result) => {
		//   if (err) {
		//     return console.log('Unable to insert todo', err);
		//   }
		//
		//   console.log(JSON.stringify(result.ops, undefined, 2));
		//
		// });

		// db.collection('Users').insertOne({
		//   name: 'Niekto',
		//   age: 25
		// }, (err, result) => {
		//   if (err) {
		//     return console.log('Unable to insert user', err);
		//   }
		//
		//   console.log(JSON.stringify(result.ops, undefined, 2));
		//   console.log(result.ops[0]._id.getTimestamp());
		// });

		client.close();
	}
);
