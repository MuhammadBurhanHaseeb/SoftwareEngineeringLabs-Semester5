const jwt = require('jsonwebtoken');
//const User = require('../models/userModel'); // Import the User model

function validateToken(req, res, next) {
  var token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }
  token = token.split(' ') [1];
  jwt.verify(token, 'abcdefghijklnmnopqrstuvwxyz', (err, decoded)=> {
    if (err) {
      return res.status(403).json({ message: 'failed to Unauthorized user !' });
    }
    req.user = decoded;
    next();
  });  }
function requireRoles(roles) {
  return (req, res, next) => {
  const userRole = req.user.role; // Assuming you saved the user's role in req.user
  if (roles.includes(userRole)) {
  // User has one of the required roles, so allow access
  next();
  } else {
  // User does not have any of the required roles, so send a forbidden response
  res.status(403).json({ message: 'Permission denied' });}};}
module.exports = {validateToken,requireRoles };
