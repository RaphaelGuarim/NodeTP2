const express = require('express');
const router = express.Router();
const {addItem } = require ('../controllers/item.js');
const id =  require ('../services/uuid.js')
const {validateSchemaMiddleware}= require ('../services/test.js')
const schema = require ('../schema/item.js')

router.post("/createItem",id.idGenerator,validateSchemaMiddleware(schema),addItem)

module.exports = router