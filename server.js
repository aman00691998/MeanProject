const express = require('express');
const path = require('path');
const http = require('http');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amn:amn12@cluster0-hobux.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });


const app = express();
app.use(cors());

const myapi = require('./REST/courseapi');
const userapi = require('./REST/userapi');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', myapi);
app.use('/', userapi);


http.createServer(app).listen(process.env.PORT || 3000);
console.log("BackEnd Server Is On=", process.env.PORT || 3000);