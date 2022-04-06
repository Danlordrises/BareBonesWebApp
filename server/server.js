const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

connectDB(); // connect to DB

const app = express();

app.use(express.json()) // body-parser for raw json
app.use(express.urlencoded({ extended: false }))

// require in the routes here
// app.use('/http/page', require('./local file path'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));