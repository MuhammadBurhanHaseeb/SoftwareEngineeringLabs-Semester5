const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
Username:String ,
Password:String,
firstName:String,
lastName:String,
DOB:String,
Role: String ,


},{timestamp:true});
module.exports = mongoose.model('User' , UserSchema);