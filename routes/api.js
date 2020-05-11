const express = require('express');
const BookPost = require('../models/bookPost');

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

router.get('/saved', (req, res) => {
    BookPost.find({ })
        .then((data) => {
            // console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log("Error: ", error)
        });
})

router.post('/saved', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newBookPost = new BookPost(data);

    newBookPost.save((error) => {
        if (error) {
            res.status(500).json({ message: 'Sorry, internal errors.' })
        } else {
            res.json({ message: 'Data Saved!' })
        }
    });

});

module.exports = router;