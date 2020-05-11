const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/api');
const colors = require('colors');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose: " + "Connected!".cyan);
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));

app.use(cors())
app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, console.log(" "), console.log("Server: " + "http://localhost:".green + colors.green(PORT)));