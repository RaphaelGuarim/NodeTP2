module.exports = {
    "title" : "user",
    "description" : "description de la base",
    "type" : "object",
    "properties" : {
        "name" : {
            "type" : "string"
        },
        "firstName" : {
            "type" : "string"
        },
        "email" : {
            "type" : "string",
            "format" : "email"
        },
        "watchlists": {
            "type": "array",
            "items": {
                "type": "string",
                "format": "uuid"
            }
        },
        "userID" : {
            "type" : "string",
            "format" : "uuid"
        }
    },
    "required": ["name", "firstName", "email"],
    "additionalProperties": false
}