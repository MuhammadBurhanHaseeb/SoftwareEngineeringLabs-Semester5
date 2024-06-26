const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Import the User model

function generateLoginToken(user) {
  const payload = {
    role: user.Role,
    id : user._id, // Assuming you want to use "Role" field for role
  };
  const token = jwt.sign(payload, 'abcdefghijklnmnopqrstuvwxyz' );
  return token;
}

async function login(req, res, next) {
  const { Username, Password } = req.body; // Match the schema field names

  try {
    const user = await User.findOne({ Username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (Password !== user.Password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    var token = generateLoginToken(user);

    return res.status(200).json({
        message: 'Logged in successfully',
        username: Username,
        Password: Password,
        userid : user._id,
        token: token,
      
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

const adminDashboard = async (req, res, ) => {
  return res.status(200).json({message : "Welcome to Admin Dashboard"}) ;
}

const superAdminDashboard = async (req, res, ) => {
  return res.status(200).json({message : "Welcome to Super Admin Dashboard"}) ;
}

const superAdminOrAdminDashboard = async (req, res, ) => {
  return res.status(200).json({message : "Welcome to Admin And Super Admin Dashboard"}) ;
}

const UserDashboard = async (req, res, ) => {
  return res.status(200).json({message : "Welcome to User Dashboard"}) ;
}
module.exports = { login, generateLoginToken, adminDashboard , superAdminDashboard , superAdminOrAdminDashboard , UserDashboard };
