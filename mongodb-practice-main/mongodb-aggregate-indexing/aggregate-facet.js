// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-aggregate-examples

// $facet - create multiple pipeline
db.test.aggregate([
    {
        $facet: {

            // pipeline - 1
            "friendsCount": [
                // stage - 1
                {
                    $unwind: "$friends"
                },
                // stage-2
                {
                    $group: { _id: "$friends", count: { $sum: 1 } }
                }

            ],

            // pipeline - 2 
            "educationCount": [
                // stage - 1
                { $unwind: "$education" },
                // 
                { $group: { _id: "$education", count: { $sum: 1 } } }
            ]
        }
    }
])