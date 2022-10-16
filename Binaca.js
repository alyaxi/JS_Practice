console.log("hello world");

//ARRAY AND OBJECT

// const who = {};

// who.name = "Mrs. White";

// console.log(who)

// const person = {}

// person.name = "Mrs. White";

// var who = person.name;

// console.log(who)

// person.name = "MR Green";

// console.log(who)

// const person = []
// person.name = "Ali"
// var who = person.name
// console.log(who)

// console.log(typeof person === "array")

// const person = []

// person.name = "Ali"

// var who = person.name

// person[0] = "Mr. Green"

// console.log(person)

// person["1"] = "Mr. array"

// console.log(person)

// console.log(person["name"])

// person.age = 20

// console.log(person)

// const person = []

// person.name = "Ali"

// var who = person.name

// person[0] = "Mr. Green"

// console.log(person.length)

// console.log(person[0])
// console.log(person["name"])

// const person1 = []
// person1.name = "Ali"
// person1[plea] = "I would be so happy"

// console.log(person1)

// var person = []
// var plea = "wouldShe"
// person.name = "Ali"
// person[plea] = "I would be so happy"
// console.log(person)

// var person = [];
// var plea = "wouldShe"
// person.name = "Mrs. White";
// person["plea"] = "I would never!"
// person.plea //??

// console.log(person.plea)

// var x = {}
// x[0] = x
// console.log(x)

// var y = []
// y[0] = y
// console.log(y)

// var x = {}
// x[0] = true
// console.log(x)

// var y = []
// y[0] = false
// console.log(y)

// var x = {}
// x["1"] = true
// console.log(x)

// var y = []
// y["1"] = false
// console.log(y)

// var obj = {}
// obj[function(){}] = true

// console.log(typeof Object.keys(obj)[0])

// var obj1 = {}

// obj1[(function(){return 3})()] = true

// console.log(typeof Object.keys(obj1)[0])
// console.log(typeof Object.values(obj1)[0])
// console.log(typeof obj1)

// const {firstName, lastName, age} = {firstName: "Ali", lastName: "Ahmed", age: 20}

// console.log(lastName)

// const [a,b,c]= [1,2,3]
// console.log(c)









const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ]
};

// game["suspects"]

// console.log(game["suspects"])

// function foo(game) {
//   for (var i = 0; i < game.suspects.length; i++) {
//     console.log("outerloop")
//     for (var key in game.suspects[i]) {
//       console.log("inner loop")
//       if (game.suspects[i][key] === "Rusty") {
//         console.log("Found em");
//       } else {
//         console.log("Not Found");
//       }
//     }
//   }
// }

// foo(game);

// for(let key in game){
//     console.log("Object loop", game[key]);
// }



suspects = [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ]


//   const [{color : firstObj}, {color:  secondObj}] = suspects
//   const [firstObj1, secondObj2] = suspects
// console.log(firstObj1, secondObj2)
//   console.log(firstObj, secondObj)




// _.each behind function

//  const _ = {}

//  _.each = function(list, callback){
//     if(Array.isArray(list)){
//         for (var i = 0; i < list.length; i++) {
//             callback(list[i], i, list);
//         }
//     }
//  }



//  _.each(["sally", "georgie", "porgie"], function(name, i, list){
//         if(list[i + 1]){
//             console.log(name, "is younger than", list[i + 1]);
//         } else {
//             console.log(name, "is the oldest");
//         }
//  }
//  )


// function createSuspectObjects(name) {
//   return {
//     name: name,
//     col or: name.split(" ")[1],
//     speak() {
//       console.log("my name is", name);
//     }
//   };
// }
// var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

// var suspectsList = _.map(suspects, function(name) {
//     return createSuspectObjects(name);
// })

// console.log(suspectsList)