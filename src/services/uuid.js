const uuid = require('uuid')

function idGenerator(req,res,next) {
    req.query.userID = uuid.v4()
    console.log(req.query.userID)
    return next()
}

module.exports = {
    idGenerator
}