// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-aggregate-examples

db.test.aggregate([

    // stage-1
    { $match: { gender: 'Male', age: { $lt: 30 } } },
    { $match: { gender: 'Male' } },

    // stage-2
    // $addFields - add item in the document, but not modifying permanantly
    { $addFields: { course: 'Level 2', eduTech: 'PH' } },

    // $out - create a new collection including the addFields item permantly, only use in final stage (no stage after this)
    { $out: 'withCourse' },

    // $merge - added the addFields item permantly to the written collection value

    // 
    { $project: { name: 1, gender: 1, course: 1 } },
    { $merge: 'test' }

])



