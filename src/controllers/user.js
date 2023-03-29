const crud = require('../services/db/crud.js')
const axios = require ('axios')
const id =  require ('../services/uuid.js')


const collection = "user"

async function addUser(req, res) {
    try {
        const user = {
            name : req.query.name,
            firstName : req.query.firstName,
            email : req.query.email,
            watchlists : [],
            userID : id.idGenerator(),
        }
        let test = await crud.insertOne(collection, user)
        return res.status(200).json(test)

    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function getUser(req,res){
    try {
        const test = await crud.find(collection)
        return res.status(200).json(test)
    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function getWatchList(req,res){
    try {
        const test = await crud.findOne(collection,{'userID': req.query.userID});
        return res.status(200).json(test.watchlists)
    } catch (e) {
        console.log(e);
        throw e;
    }
}


module.exports = {
    addUser,
    getUser,
    getWatchList,
}