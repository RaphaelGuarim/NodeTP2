const express = require('express');
const router = express.Router();
const {addWatchlist,addItem,updateItem,getContent } = require ('../controllers/watchlist.js');
const {validateSchemaMiddleware}= require ('../services/test.js')
const schema = require ('../schema/watchlist.js')

router.post("/createWatchlist",validateSchemaMiddleware(schema),addWatchlist)

router.patch("/addItem",addItem)

router.patch("/updateItem",updateItem)

router.get("/getContent",getContent)

module.exports = router