const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get('/people-like-you', controller);

module.exports = router;