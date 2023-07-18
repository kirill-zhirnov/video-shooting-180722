const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello World')
});

app.get('/test-error', function () {
	setTimeout(() => {
		throw new Error('Boom');
	}, 100);
});

app.listen(3000, () => console.log('Server started'))


