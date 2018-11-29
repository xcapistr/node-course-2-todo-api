// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	(err, client) => {
		if (err) {
			return console.log('Unable to connect to Mongo DB server');
		}
		console.log('Connected to MongoDB server');

		const db = client.db('TodoApp');

		db.collection('Users')
			.find({ name: 'Marek' })
			.toArray()
			.then(
				users => {
					console.log(`Users:`);
					console.log(JSON.stringify(users, undefined, 2));
				},
				err => {
					console.log('Unable to fetch users');
				}
			);

		//client.close();
	}
);
