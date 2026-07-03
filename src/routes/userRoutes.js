const express = require('express');
const { protect } = require('../middleware/auth');
const { getMe, getAllUsers, getUserCount } = require('../controllers/userController');

const router = express.Router();

router.use(protect);

router.get('/me', getMe);
router.get('/count', getUserCount);
router.get('/', getAllUsers);

module.exports = router;