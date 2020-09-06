const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');
const queryParser = require('express-query-int');

const server = express();

server.use(allowCors);
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(queryParser());

server.listen(port, ()=>{
    console.log("a, rodando ");

})

module.exports = server