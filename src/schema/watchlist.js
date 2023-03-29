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
                        "enum": ["A voir", "En cours", "Terminé", "Abandonné"]
                    }
                }
            }
        },
        "proprietaire": {
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
    "required": ["proprietaire", "libelle"],
    "additionalProperties": true
}