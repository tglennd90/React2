const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: Array,
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

module.exports = BookPost;