'use strict';

const express = require('express'); // charge ExpressJS
const fs = require('fs');
const router = express.Router();

module.exports = router;

router.all('/s*', (req, res, next) => {
	console.log('webservice', req.url);

	fs.readFile('./ws' + req.url, 'utf8', (err, data) => {
		if (err) {
			return console.log(err);
		}
		console.log('data', data);
		const json = JSON.parse(data);
		console.log('json', json);
		const delay = json.delay;
		setTimeout(()=>{
			res.json(json);
		},delay);
	});
})