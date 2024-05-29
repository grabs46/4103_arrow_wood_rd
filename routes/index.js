// routes/index.js

const express = require('express');
const router = express.Router();

// Sample array of image data
const images = [
    { url: '/images/FrontView.jpg', text: 'Luscious yard, with 4,646 Sq Ft of property space' },
    { url: '/images/BackYardWideView.jpg', text: 'Gate access to green space for even more space' },
    { url: '/images/BackYardView2.jpg', text: 'Self cleaning pool, which includes a pool heater and hot tub' }
];


router.get('/', (req, res) => {
    res.render('index', { images });
});

module.exports = router;
