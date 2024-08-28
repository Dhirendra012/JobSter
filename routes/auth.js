const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');

const rateLimiter = require('express-rate-limit');

const appLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        msg: 'Too many request from this IP, Please try again later'
    }
});

const { register, login, updateUser } = require('../controllers/auth')
router.post('/register', appLimiter , register)
router.post('/login', appLimiter , login)
router.patch('/updateUser', authenticateUser , testUser , updateUser);

module.exports = router
