const crud = require('../services/db/crud.js')
const axios = require ('axios')


const collection = "user"

async function addUser(req, res) {
    try {
        const user = {
            name : req.query.name,
            firstName : req.query.firstName,
            email : req.query.email,
            watchlist : req.query.watchlist,
            userId : req.query.userID,
        }
        console.log(user)
        let test = await crud.insertOne(collection, user)
        return res.send(test)

    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction addUser`);
        console.log(e);
        throw e;
    }
}

async function getUser(req,res){
    try {
        const test = await crud.find(collection)
        return res.status(200).json(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction getUser`);
        console.log(e);
        throw e;
    }
}

module.exports = {
    addUser,
    getUser
}