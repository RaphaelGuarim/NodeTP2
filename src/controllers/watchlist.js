const crud = require ('../services/db/crud.js')
const {axios} = require ('axios')
const collection = "watchlist"
const items = "item"
const id =  require ('../services/uuid.js')
const statuts = ["A voir", "En cours", "Terminé", "Abandonné"]
const user ='user'

async function addWatchlist(req,res){
    try{
        const watchlist = {
            "items":[],
            "proprietaire": req.query.proprietaire,
            "watchlistID": id.idGenerator(),
            "libelle": req.query.libelle,
            "items": []
        }
        const find = await crud.findOne(user,{'userID':req.query.proprietaire})
        const option = {$push:{'watchlists':watchlist.watchlistID}}
        const update =await crud.updateOne(user,find,option)
        let test = await crud.insertOne(collection, watchlist)
        return res.send(test)
    }
    catch (e){
        console.log(e);
        throw e;
    }
}

async function addItem(req,res){
    try {
        if (statuts.includes(req.query.state)){
            const watchlist = await crud.findOne(collection,{"watchlistID":req.query.watchlistID});
            const update = {$push:{"items":{"item_id":req.query.itemID,"statut":req.query.state}}};
            let test = await crud.updateOne(collection,watchlist,update);
            return res.send(test);
        }else{
            return res.status(200).send("Erreur état item");
        }
        
    } catch (e) {
        console.log(e);
        throw e;
    }
}

// Ici on n'est obligé de renvoyer res.status(200) car res.send empeche d'utiliser set avec update
async function updateItem(req,res){
    try {
        if (statuts.includes(req.query.state)){
            const watchlist = await crud.findOne(collection,{"watchlistID":req.query.watchlistID});
            watchlist.items.forEach(async (item) => { 
                if (item.item_id === req.query.itemID) {
                    const index = watchlist.items.indexOf(item)
                    const update = {$set:{[`items.${index}.statut`]:req.query.state}};
                    result = await crud.updateOne(collection,watchlist,update);
                    return res.status(200).send("Mis a Jour Réussie ")
                }
            })
            return res.status(200).send("Le film n'est pas dans la liste");
        }else{
            return res.status(200).send("Erreur état item");
        }
        
    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function getContent(req,res){
    try {
        const test = await crud.findOne(collection,{'watchlistID': req.query.watchlistID});
        return res.status(200).json(test.items)
    } catch (e) {
        console.log(e);
        throw e;
    }
}


module.exports = {
    addWatchlist,
    addItem,
    updateItem,
    getContent
};