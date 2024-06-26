const card = require('../models/cardModel')

async function createCard(req,res)
{
    try
    {
        console.log(req.body)
        const newCard  = await card.create(req.body);
        res.status(201).json(newCard);
    
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
   
}

async function getCard(req,res)
{
    try
    {
        const allCards = await card.find();
        res.status(200).json(allCards);
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
}


async function deleteCard(req,res)
{
    try
    {
        const { id } = req.params;
        const allCards = await card.findByIdAndRemove( id );
        res.status(200).json(allCards);
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
}

async function updateCard(req,res)
{
    try
    {
        const { id } = req.params;
        console.log(id);

        const updatedCard = await card.findByIdAndUpdate(id , req.body , {new: true });
        res.status(200).json(updatedCard);
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
}
module.exports={ createCard , getCard , updateCard , deleteCard,}