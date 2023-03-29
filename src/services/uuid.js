const uuid = require('uuid')

function idGenerator() {
    return uuid.v4()
}

module.exports = {
    idGenerator
}