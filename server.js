/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

// Setting up a static directory for the files in /pub
// using Express middleware.
// Don't put anything in /pub that you don't want the public to have access to!
app.use(express.static(path.join(__dirname, '/pub')))


app.get('/', (req, res) => {
	res.redirect('/html/index.html');
})

app.get('/example', (req, res) => {
	res.redirect('/html/example.html');
})

app.get('/download', (req, res) => {
	res.redirect('/html/download.html');
})

app.get('/api', (req, res) => {
	res.redirect('/html/api.html');
})

// Error codes
app.get('/problem', (req, res) => {
	// You can indicate a status code to send back
	// by default it is 200, but it's up to you
	// if you want to send something
	res.status(500).send('There was a problem on the server')

})


// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 6806
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})  

