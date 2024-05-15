// Find all documents in the collection where the age is greater than 30, and only return the name and email fields.
// db.test.find(
//     {age: {$gt:30}}
// )
//   .projection({name: 1, email:1, age:1})
//   .sort({age: 1})
//   .limit(100)

// Find documents where the favorite color is either "Maroon" or "Blue."

// db.test.find(
//     // {$or: [{favoutiteColor: 'Maroon'}, {favoutiteColor: 'Blue'}]}
//     {
//         favoutiteColor : {$in: ['Maroon', 'Blue']}
//     }
//     )
//   .projection({name: 1, favoutiteColor:1, age:1})
//   .sort({age: 1})
//   .limit(100)


// Find all documents where the skill is an empty array.
// db.test.find(

//     {
//         // skills : {$size: 0}
//         skills : []
//     }
//     )
//   .projection({name: 1, skills:1, age:1})
//   .sort({age: 1})
//   .limit(100)

// Find documents where the person has skills in both "JavaScript" and "Java."

// db.test.find(
//     {
//       $and: [{'skills.name' : 'JAVASCRIPT'}, {'skills.name' : 'JAVA'}]  
//     }
// )
// .projection({name: 1, skills:1, age:1})
// .sort({age: 1})
// .limit(100)

// Add a new skill to the skills array for the document with the email "aminextleveldeveloper@gmail.com".

// db.test.updateOne({ _id: ObjectId("6406ad65fc13ae5a400000c7") },
//     {
//         $addToSet: {
//             skills: {$each: [
// 		{
// 			"name" : "PYTHON2",
// 			"level" : "Beginner",
// 			"isLearning" : true
// 		}]} 
//         }
//     }
// )

// Add a new language "Spanish" to the list of languages spoken by the person.

// db.test.updateOne({ _id: ObjectId("6406ad65fc13ae5a400000c7") },
//     {
//         $addToSet: {
//             languages: {$each: ['German']}
//         }
//     }
// )

// Remove the skill with the name "PYTHON" from the skills array.

db.test.updateOne({ _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $pull: {
            skills : {
			"name" : "PYTHON",

		},
            }
        }
    }
)

