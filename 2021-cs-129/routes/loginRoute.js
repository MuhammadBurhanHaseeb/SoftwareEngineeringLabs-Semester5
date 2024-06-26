const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const {validateToken , requireRoles} = require('../Utils/authorization_middleware');

// Login

router.post('/loginUser', loginController.login);
router.post('/Admin',validateToken,requireRoles('Admin'), loginController.adminDashboard);
router.post('/SuperAdmin',validateToken,requireRoles('SuperAdmin'), loginController.superAdminDashboard);
router.post('/SuperAndAdmin',validateToken,requireRoles('SuperAdmin','Admin'), loginController.superAdminOrAdminDashboard);
router.post('/Public',validateToken,requireRoles('User'), loginController.UserDashboard);
module.exports = router;
