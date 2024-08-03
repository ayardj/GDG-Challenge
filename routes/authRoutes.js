const express = require('express');
const router = express.Router();

const{
    register,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword
} = require('../controllers/authController');
const {
    validateRegistrationRequest,
    validateLoginRequest
  } = require('../middleware/attributeValidtion');
const {
    authenticateUser
  } = require('../middleware/authentication');
router.post('/register',validateRegistrationRequest, register);
router.post('/verify-email', verifyEmail);
router.post('/login',validateLoginRequest, login);
router.delete('/logout',authenticateUser, logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;