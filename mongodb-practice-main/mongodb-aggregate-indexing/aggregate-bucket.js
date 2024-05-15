// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-aggregate-examples

// bucket - used to make a boundary range, like 0-19 => 20, 20-39 => 40, 40-59=>60, 60-79=>80, 79+ => default
db.test.aggregate([

    // stage - 1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "79 ar upore",
            output: {
                count: { $sum: 1 },
                peopleName: { $push: '$$ROOT' }
            }
        }
    },

    // stage - 2
    {
        $sort: { count: 1 }
    },

    // stage - 3
    {
        $limit: 2
    },

    // stage - 4
    {
        $project: {
            count: 1,
            'peopleName.name': 1
            // people: {$slice: ['$peopleName.name', 2]}
        }
    }
])