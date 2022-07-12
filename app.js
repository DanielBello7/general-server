


const express = require('express');
const http = require('http');
const path = require('path');
const cloudinary = require('cloudinary');
const { check, validationResult } = require('express-validator');


const app = express();
const server = http.createServer(app);


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));

const address = "localhost";
const port = 3400;

app.get('/', (req, res) => {
	return res.send('home page');
});


server.listen(port, address, () => {
   console.log(`server running on http://${address}:${port}.....`);
});