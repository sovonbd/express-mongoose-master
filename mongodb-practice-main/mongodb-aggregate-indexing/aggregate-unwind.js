// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-aggregate-examples

// unwind - break the array items and separate them with an object/document, although other items/property remain same there

db.test.aggregate([

// stage - 1
    {
        $unwind: "$interests"
    },

// stage - 2
    {
        // $group: { _id: "$age", peopleNumber: {$sum: 1}, interestsInGroup : {$push: '$interests'}}
        $group: { _id: "$age", peopleNumber: { $sum: 1 }, interestsInGroup: { $addToSet: '$interests' } }
    },

// stage - 3
    {
        $project: {
            // _id: 0,
            // age: '$_id',
            peopleNumber: 1,
            countInterests: { $size: '$interestsInGroup' },
            interestsInGroup: 1
        }
    }

])