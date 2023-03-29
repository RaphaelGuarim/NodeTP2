const express = require('express');
const router = express.Router();
const {addUser, getUser, getWatchList } = require ('../controllers/user.js');
const id =  require ('../services/uuid.js')
const {validateSchemaMiddleware}= require ('../services/test.js')
const schema = require ('../schema/user.js')

router.post("/createUser",validateSchemaMiddleware(schema),addUser)

router.get("/getUser",getUser)

router.get("/getWatchlist",getWatchList)

module.exports = router