// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-aggregate-examples

// $lookup - get information from a foreign collection
db.orders.aggregate([

    {
        $lookup: {
            from: "test",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }

])