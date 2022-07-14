


const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
// const cloudinary = require('cloudinary');
// const { check, validationResult } = require('express-validator');


const app = express();
const server = http.createServer(app);


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));

const address = "localhost";
const port = 3400;

app.get('/', (req, res) => {
   return res.send('Homepage');
});

app.get('/pages', (req, res) => {
   return res.send('Pages');
});

app.get('/.well-known/acme-challenge/-A3mNU61jj4atF2YP9LdY1U7YoVaCM2GZ7cfTUryyys', async (req, res) => {
   const file = fs.readFileSync(path.join(__dirname, "./public/-A3mNU61jj4atF2YP9LdY1U7YoVaCM2GZ7cfTUryyys"), "utf8");
   return res.send(file);
});


server.listen(port, () => {
   console.log(`server running on http://${address}:${port}.....`);
});