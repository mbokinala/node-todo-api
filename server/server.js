require('./config/config.js');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('<h3>Welcome to Manav\'s node REST api. A documentation will be available soon. Until then, please <a href="mailto:manav.bokinala@gmail.com?Subject=Question%20about%20todo%20REST%20api&Body=Hello%2C%0A%0AThis%20is%20_________.%20I%20am%20emailing%20about%20a%20question%20regarding%20your%20node%20REST%20api.%20Here%20is%20my%20question%3A%20_______________________________________________.%20Please%20email%20me%20at%20______________@__________._____%20as%20soon%20as%20you%20can">email the developer</a> if you have any questions</h3>')
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({
			todos
		});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}

		res.send({
			todo
		});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}

		res.send({
			todo
		});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);

	if (!ObjectID.isValid(id)) {
		return res.status(404).send('ID is not valid');
	}

	if (_.isBoolean(body.completed) && body.completed == true) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {
		$set: body
	}, {
		new: true
	}).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}

		res.send({
			todo
		});
	}).catch((e) => {
		console.log(e);
		res.status(400).send();
	});
});

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text,
		completed: false,
		completedAt: null
	});

	todo.save().then((doc) => {
		res.status(201).send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});


app.post('/users', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body);

	user.save().then(() => {
		return user.generateAuthToken();
	}).then((token) => {
		res.header('x-auth', token).status(201).send(user);
	}).catch((err) => {
		res.status(400).send(err);
	});
});


app.get('/users/me', authenticate, (req, res) => {
	res.send(req.user);
});

app.post('/users/login', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);

	User.findByCredentials(body.email, body.password).then((user) => {
		return user.generateAuthToken().then((token) => {
			res.header('x-auth', token).status(201).send(user);
		});
	}).catch((err) => {
		res.status(400).send();
	});
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
});

module.exports = {app};