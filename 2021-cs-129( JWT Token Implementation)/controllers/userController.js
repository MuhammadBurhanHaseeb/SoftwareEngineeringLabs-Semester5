const user = require('../models/userModel')
async function createUser(req,res){
    try{
        console.log(req.body)
        const newUser  = await user.create(req.body);
        res.status(201).json(newUser);
    }catch(error){res.status(500).json({error:error})}}
async function getUser(req,res){
    try{
        const allUser = await user.find();
        res.status(200).json(allUser);}
    catch(error){res.status(500).json({error:error})}}
async function deleteUser(req,res){
    try{
        const { id } = req.params;
        const allUser = await user.findByIdAndRemove( id );
        res.status(200).json(allUser);
    }catch(error){res.status(500).json({error:error})}}
async function updateUser(req,res){
    try{
        const { id } = req.params;
        console.log(id);
        const allUser = await user.findByIdAndUpdate(id , req.body , {new: true });
        res.status(200).json(allUser);}
    catch(error){res.status(500).json({error:error})}}
module.exports={ createUser , getUser , updateUser , deleteUser,}