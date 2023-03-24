module.exports = {
    "title": "watchlist",
    "description": "Représente la watchlist d'un utilisateur",
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "détails": {
                "type": "object",
                "properties": {
                    "item_id": "number",
                    "statut": {
                        "enum": ["à voir", "en cours", "terminé", "abandonné"]
                    }
                }
            }
        },
        "propriétaire": {
            "type": "string",
        },
        "watchlistID": {
            "type": "string",
            "format": "uuid"
        },
        "libelle" : {
            "type" : "string"
        }
    },
    "required": ["propriétaire", "libelle"],
    "additionalProperties": false
}