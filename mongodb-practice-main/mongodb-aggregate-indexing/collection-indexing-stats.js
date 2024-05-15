// check execution stats
db.getCollection('massive-data').find({"_id" : ObjectId("654dbf20ac03b4ef85f27a88")}).explain("executionStats")

// createIndex - to search data more quickly (create a searching index)
// by default mongodb has _id index, that is why it gives result quickly using _id search

// createIndex - create an index
db.getCollection('massive-data').createIndex({email: 1})

// dropIndex
db.getCollection('massive-data').dropIndex({email: 1})

// textIndex
db.getCollection('massive-data').createIndex({about: 'text'})

// search using text
db.getCollection('massive-data').find({$text: { $search: "dolor" }}).project({about:1})
