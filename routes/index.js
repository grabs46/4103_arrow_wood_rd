// routes/index.js

const express = require('express');
const router = express.Router();

// Sample array of image data
const images = [
    { url: '/images/FrontView.jpg', text: 'Text for Image 1' },
    { url: '/images/BackYardWideView.jpg', text: 'Text for Image 2' },
    { url: '/images/BackYardView2.jpg', text: 'Text for Image 3' }
];

router.get('/', (req, res) => {
    res.render('index', { images });
});

module.exports = router;
