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

		// update
		// db.collection('Todos')
		// 	.findOneAndUpdate(
		// 		{ _id: new ObjectID('5bffbad16e09280827f7720f') },
		// 		{
		// 			$set: {
		// 				completed: true
		// 			}
		// 		},
		// 		{
		// 			returnOriginal: false
		// 		}
		// 	)
		// 	.then(result => {
		// 		console.log(result);
		// 	});

		// update
		db.collection('Users')
			.findOneAndUpdate(
				{ name: 'Milan' },
				{
					$set: {
						name: 'Marek'
					},
					$inc: {
						age: 1
					}
				},
				{
					returnOriginal: false
				}
			)
			.then(result => {
				console.log(result);
			});

		//client.close();
	}
);
