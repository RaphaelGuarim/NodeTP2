module.exports = {
    "title" : "item" ,
    "description": "Film de la base",
	"type": "object",
    "properties" : {
        "itemID" : {
            "type" : "string",
            "format" : "uuid"
        },
        "title" : {
            "type" : "string"
        },
        "year" : {
            "type" : "string"
        },
        "country" : {
            "type" : "string"
        },
        "genre" : {
            "type" : "string"
        },
        "language" : {
            "type" : "string"
        },
        "ImdbId" : {
            "type" : "string"
        }
    },
    "required": ["title", "year", "ImdbId"],
    "additionalProperties": true
}