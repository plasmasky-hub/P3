require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const { connectToDB } = require('./utils/db');

const app = new express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.get ('/', (req, res) => {
    res.send('hello world');
})

app.use('/v1', router);

connectToDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})