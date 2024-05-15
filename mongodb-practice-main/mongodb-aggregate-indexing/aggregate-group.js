// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-aggregate-examples

// $group - make group using an specific field from the document, 
// _id must need to use (based on this it will make the group), 
// always need to use $ before value

db.test.aggregate([
    // stage - 1
    {
        // $group: { _id: "$age", count: {$sum: 1}}

        // $push - show specific item
        // $group: { _id: "$age", count: {$sum: 1}, nameDekhao: {$push: '$name'}}

        // $$ROOT - show all the items in the document
        $group: { _id: "$age", 
        count: { $sum: 1 }, 
        nameDekhao: { $push: '$$ROOT' } 
        }

    },


// stage - 2
    {
        $project: {
            count: 1,
            'nameDekhao.name': 1,
            'nameDekhao.email': 1,
            'nameDekhao.gender': 1,
        }
    },
    // {
    //     $sort : {_id:1}
    // }
])


// field renaming, calculation in $project

db.test.aggregate([
    // stage- 1
    {
        $group: {
            _id: "null",
            count: { $sum: 1 },
            totalSalary: { $sum: "$salary" },
            minSalary: { $min: '$salary' },
            maxSalary: { $max: "$salary" },
            avgSalary: { $avg: '$salary' }
        }
    },

    // stage - 2
    {
        $project: {
            totalSalary: 1,
            maximumSalary: '$maxSalary',
            minimumSalary: '$minSalary',
            rangeBetweenMaxmAndMin: { $subtract: ["$maxSalary", '$minSalary'] }
        }
    }
])