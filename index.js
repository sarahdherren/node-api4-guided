require('dotenv').config()

console.log(`web46 rulez`);

console.log(process.argv[2]);

console.log(process.argv[3]);

console.log(process.env.USER);

const express = require('express');

const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
    res.send('<h1>HELLO THERE!</h1>');
});

//heroku wants to run it on whatever port heroku wants - we cannot force it to be assigned a port in production!!
//we need to use the port that lives in the environment
//in development it will be undefined so assign a port w/ the or operand.

const port = process.env.PORT || 3000;

//to get around this ^^^^ hackerish workaround we use dotenv

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});