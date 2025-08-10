const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', (req, res) => res.redirect('/login'));

router.get('/login', loginController.renderLoginPage);
router.post('/login', loginController.login);
router.get('/logout', loginController.logout);

module.exports = router;
