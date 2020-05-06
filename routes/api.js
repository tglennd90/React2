const express = require('express');
const BookPost = require('../models/BookPost');

const router = express.Router();

router.get('/', (req, res) => {

    BookPost.find({ })
        .then((data) => {
            // console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log("Error: ", error)
        });

});

module.exports = router;