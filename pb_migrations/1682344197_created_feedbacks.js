migrate((db) => {
  const collection = new Collection({
    "id": "6m5kblq937ubnk1",
    "created": "2023-04-24 13:49:57.984Z",
    "updated": "2023-04-24 13:49:57.984Z",
    "name": "feedbacks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "maxxfrle",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "thvm1iku",
        "name": "subject",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mbb8gofw",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6m5kblq937ubnk1");

  return dao.deleteCollection(collection);
})
