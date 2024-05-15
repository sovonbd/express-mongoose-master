// Fill fitering - show only some data
// db.test.findOne({ age: 17 }, { gender: 1, name: 1, email: 1, phone: 1 })

// Project only works with find method
// db.test.find({ age: 17 }).project({age:1, gender: 1, name: 1, email: 1, phone: 1 })

// db.test.find({age: {$lt: 30}}).sort({ age: 1 })

// implicit and
// db.test.find({ gender: 'Female', age: { $gt: 18, $lt: 30 } }, { age: 1, gender: 'Female' }).sort({ age: 1 })
// db.test.find({ gender: 'Female', age: { $in: [18, 20, 22, 24, 26, 28] }, interests: 'Cooking' }, { age: 1, gender: 'Female', interests: 1 }).sort({ age: 1 })

// explicit and
// db.test.find({
//     $and: [
//         {gender: 'Female'},
//         { age: { $ne: 15, $lte: 30 } },
//         // {age: {}}
//     ]
// }).project({age: 1, gender: 1}).sort({age:1})

// explicit or
// db.test.find({
//     $or: [
//         {interests: 'Cooking'},
//         {interests: 'Travelling'},
//     ]
// }).project({interests: 1}).sort({age:1})

// finding object inside array
// db.test.find({
//     // $or: [
//     //     { "skills.name": "JAVASCRIPT" },
//     //     { "skills.name": "PYTHON" },
//     // ]
//     "skills.name" : {$in : ['JAVASCRIPT', 'PYTHON']}
// }).project({ skills: 1 }).sort({ age: 1 })

// Elemnet query
// exist
// db.test.find({company: {$exists: false}})
//   .project({})
//   .limit(100)

// type
// db.test.find({company: {$type: "null"}})
//   .project({})

// Array query
// size
// db.test.find({friends: {$size: 0}})
//   .projection({})
//   .sort({_id:-1})
//   .limit(100)

// all - used for array when position doesn't matter
// db.test.find({interests: {$all : ['Gardening', 'Writing']}}).project({interests:1})

// elemMatch - used for the array of objects, position doesn't matter
// db.test.find({$and:[{'skills.name': 'JAVASCRIPT'}, {'skills.level': 'Expert'}]}).project({skills:1})
db.test.find({
    skills: {
        $elemMatch: {
            level: 'Expert',
            name: 'JAVASCRIPT',
        }
    }
}).project({ skills: 1 })




