const {Router}= require('express');
const router = require("./routeUser.js");
const router2 = require("./routeItem.js");


const mainRouter = Router();

mainRouter.use("/user",router)

mainRouter.use("/item",router2)

module.exports = mainRouter