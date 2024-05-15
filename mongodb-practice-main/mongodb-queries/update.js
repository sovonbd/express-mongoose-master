// update
// db.test.updateOne(
//     {kak update korbo},
//     {ki update korbo}, 
//     {option - ki return korbo})

// Field Update
// $set - update entirely, use both in premitive and non premitive
// premitive
// db.test.updateOne(
//     {_id: ObjectId('6406ad65fc13ae5a400000c7')}, 
//     {
//         $set : {
//             age:30
//         }
//     })

// non premitive
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7') },
//     {
//         $set: {
//             "address.street": "xxx",
//             "address.city": "yyy",
//             "address.postalCode": "123",
//         }
//     })

// $unset - remove a field from property
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7') },
//     {
//         $unset: {
//             birthday: ''
//         }
//     })

// $inc -  update a value based on increment number
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7') },
//     {
//         $inc: {
//             age: 2
//         }
//     })

// Array Update
// $addToSet - add a new value without update entirely, no duplicate
// db.test.updateOne(
//     {_id: ObjectId('6406ad65fc13ae5a400000c7')}, 
//     {
//         $addToSet: {
//             interests: 'Walking'
//         }
//     })

// $each - add multiple value in the array, no duplicate
// db.test.updateOne(
//     {_id: ObjectId('6406ad65fc13ae5a400000c7')}, 
//     {
//         $addToSet: {
//             interests: {$each: ['Playing', 'Watching']}
//         }
//     })

// $push - add new value and do duplicate
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7') },
//     {
//         $push: {
//             interests: 'football'
//         }
//     })

// $pop - remove a item from an array, 1 for the last item, -1 for the first item
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7') },
//     {
//         $pop: {
//             interests: 1
//         }
//     })


// $pull - remove a value 
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7') },
//     {
//         $pull: {
//             interests: 'Walking'
//         }
//     })


// $pullAll - remove multiple item from an array
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7') },
//     {
//         $pullAll: {
//             interests: ["Writing", "Walking"]
//         }
//     })

// positional operator ($) - used to update a specific value of an object inside of an array
// db.test.updateOne(
//     { _id: ObjectId('6406ad65fc13ae5a400000c7'), 'education.major': 'Philosophy' },
//     {
//         $set: {
//             "education.$.major" : "CSE",
//         }
//     })

// 
