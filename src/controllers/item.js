const crud = require('../services/db/crud')
const axios = require ('axios')


const collection = "item"

async function addItem(req, res) {
    try {
        const item = {
            title : req.query.title,
            year : req.query.year,
            country : req.query.country,
            genre : req.query.genre,
            language : req.query.language,
            ImdbId : req.query.ImdbId,
            itemId : req.query.itemID,
        }
        console.log(item)
        let test = await crud.insertOne(collection, item)
        return res.send(test)

    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction additem`);
        console.log(e);
        throw e;
        
    }
}

module.exports = {
    addItem
}