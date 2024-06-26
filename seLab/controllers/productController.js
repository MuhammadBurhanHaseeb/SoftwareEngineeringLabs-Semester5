const product = require('../models/productModel')

async function createProduct(req,res)
{
    try
    {
        console.log(req.body)
        const newProduct  = await product.create(req.body);
        res.status(201).json(newProduct);
    
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }
   
}
module.exports={ createProduct }