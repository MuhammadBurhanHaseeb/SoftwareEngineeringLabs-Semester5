const mongoose = require('mongoose')
const CardSchema = mongoose.Schema({
cardType:String ,
cardBank:String,
cardHolderName:String,
cardNumber:String,
cardExpiry:String,
cardCVC: Number ,


},{timestamp:true});
module.exports = mongoose.model('Card' , CardSchema);