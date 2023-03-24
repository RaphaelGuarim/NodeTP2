module.exports = {
    "title" : "item" ,
    "description": "Film de la base",
	"type": "object",
    "properties" : {
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
        },
        "itemID" : {
            "type" : "string",
            "format" : "uuid"
        }
    },
    "required": ["title", "year", "ImdbId"],
    "additionalProperties": true
}