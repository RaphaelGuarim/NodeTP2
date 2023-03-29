const crud = require('../services/db/crud')
const axios = require ('axios')
const id =  require ('../services/uuid.js')


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
            itemId : id.idGenerator(),
        }
        console.log(item)
        let test = await crud.insertOne(collection, item)
        return res.send(test)

    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function getItem(req, res){
    try {
        let test = await crud.find(collection)
        if (req.query.year && req.query.year.trim() !== "") {
            let test = await crud.find(collection,{"year":req.query.year} )
            return res.status(200).json(test)
        }else if (req.query.title && req.query.title.trim() !== "") {
            let test = await crud.find(collection,{"title":req.query.title} )
            return res.status(200).json(test)
        }          
        return res.status(200).json(test)
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = {
    addItem,
    getItem
}