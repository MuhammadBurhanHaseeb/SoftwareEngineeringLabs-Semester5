const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/User',userController.createUser);
router.get('/getUser',userController.getUser);
router.put('/updateUser/:id',userController.updateUser);
router.delete('/deleteUser/:id',userController.deleteUser);
module.exports = router;