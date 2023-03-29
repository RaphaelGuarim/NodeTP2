const {Router}= require('express');
const router = require("./routeUser.js");
const router2 = require("./routeItem.js");
const router3 = require("./routeWatchlist.js");

const mainRouter = Router();

mainRouter.use("/user",router)

mainRouter.use("/item",router2)

mainRouter.use("/watchlist",router3)

module.exports = mainRouter