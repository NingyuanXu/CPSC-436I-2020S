const router = require('express').Router();
const messageRoutes = require('./api');
const path = require('path');

// API routes
router.use('/api', messageRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    console.log(__dirname);
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;