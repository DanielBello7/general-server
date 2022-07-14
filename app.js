


const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');


const httpsOptions = {
   cert: fs.readFileSync(path.join(__dirname, "cert", "serverCert.pem")),
   key: fs.readFileSync(path.join(__dirname, "cert", "serverKey.pem"))
}

const app = express();
const port = 3400;
const server = https.createServer(httpsOptions, app);


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));


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
   console.log(`server running on ${port}.....`);
});