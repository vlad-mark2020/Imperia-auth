const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { ensureAuthenticated } = require('../middleware/checkAuth');

// Защищаем только главную страницу админки
router.get('/', ensureAuthenticated, adminController.renderAdminPage);

router.get('/users', ensureAuthenticated, adminController.getUsers);
router.get('/keys', ensureAuthenticated, adminController.getKeys);
router.post('/generate-key', adminController.generateKey);
router.post('/delete-user/:id', ensureAuthenticated, adminController.deleteUser);
router.put('/user/:id', ensureAuthenticated, adminController.updateUser);
router.post('/delete-key/:id', ensureAuthenticated, adminController.deleteKey);

module.exports = router;
