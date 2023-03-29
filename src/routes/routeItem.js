const express = require('express');
const router = express.Router();
const {addItem, getItem} = require ('../controllers/item.js');
const {validateSchemaMiddleware}= require ('../services/test.js')
const schema = require ('../schema/item.js')

router.post("/createItem",validateSchemaMiddleware(schema),addItem)

router.get("/getItem",getItem)

module.exports = router