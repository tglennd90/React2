const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000;

const MONGODB_URI = 'mongodb+srv://tglennd90:L19RdG3naYl8VNmW@cluster0-jsjlc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose: Connected!');
})

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    image: String,
    link: String
});

// Model
const BookPost = mongoose.model('TestBook', bookSchema);

const bookTest = {
    title: "Tatum",
    author: "Tatum",
    description: "Tatum - Testing",
    image: "Tatum",
    link: "Tatum"
}

// const newBookSchema = new BookPost(bookTest);

// newBookSchema.save((error) => {
//     if (error) {
//         console.log("Error on Save");
//     } else {
//         console.log("Data Saved!");
//     }
// });

app.use(morgan('tiny'));

app.get('/', (req, res) => {

    BookPost.find({ })
        .then((data) => {
            // console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log("Error: ", error)
        });

});

app.listen(PORT, console.log("Server Listening: " + "http://localhost:" + PORT));