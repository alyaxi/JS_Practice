const titles = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
];

const posts = [
    { id: 1, post: "This is post 1" },
    { id: 3, post: "This is post 3" },
    { id: 2, post: "This is post 2" },
];


const newArray = []

for(let i = 0; i < titles.length; i++) {
    for(let j = 0; j < posts.length; j++) {
        if(titles[i].id === posts[j].id) {
            newArray.push({id: titles[i].id, title: titles[i].title, post: posts[j].post})
        }
    }
}
//Expected output
// [
//     { "id": 1, "title": "Title 1", "post": "This is post 1" },
//     { "id": 2, "title": "Title 2", "post": "This is post 2" }, 
//     { "id": 3, "title": "Title 3", "post": "This is post 3" }
// ]

//find diagonal value in array

const arr = [
    [1, 3, 4, 2],
    [4, 5, 3, 5],
    [5, 2, 6, 4],
    [8, 2, 9, 3]
 ];
 const diagonalProduct = arr => {
    let product = 1;
    for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
          if(i === j){
             product *= arr[i][j];
          };
       };
    };
    return product;
 };


const diagnolVal = diagonalProduct(arr)
console.log(diagnolVal);

//Q3

 let userData=[
    {
      name:"john",
      age:22,
      gender:"male"
    },
    {
      name:"won",
      age:34,
      gender:"female"
    },
    {
      name:"kon",
      age:6,
      gender:"female"
    },
    {
      name:"mon",
      age:88,
      gender:"male"
    },
    {
      name:"loan",
      age:91,
      gender:"male"
    },
    
  ]
  
  let sumage = userData.filter(({gender}) => gender == "male").reduce((a,v) => {return a + v.age},0)
  
  console.log(sumage);
  let sumAges = []
  for(let i = 0; i < userData.length; i++){
    if(userData[i].gender === "male"){
        if(userData[i].age){
            sumAges.push(userData[i].age)
        }
    }
  }
  
  const finalSum = sumAges.reduce((a,v) => {return a + v}, 0)
  
  console.log(finalSum);
  
  //Q4
  const obj1 = [
    {
      id: "01",
      name: "Ali",
    },
    {
      id: "02",
      name: "Rashid",
    },
  ];
  
  const obj2 = [
    {
      id: "01",
      email: "ali_hot11@hotmail.com",
    },
    {
      id: "02",
      email: "ali_hot11@hotmail.com",
    },
  ];
  
  const newobj = []
  
const email = obj2.filter((v) => v.email)
  
  obj1.map((v) => {
    obj2.map((j) => {
      if(v.id == j.id){
        let randomObj = {
          id: v.id,
          name: v.name,
          email: j.email
        }
        newobj.push(randomObj)
      }
    })
  })
  
  console.log(newobj);
    
  for (let i = 0; i < obj1.length; i++) {
  for(let j = 0; j < obj2.length; j++){
    if(obj1[i].id == obj2[j].id){
      let randomObj = {
        id: obj1[i].id,
        name: obj1[i].name,
        title: obj2[i].email
      }
      newobj.push(randomObj)
    }
  }
}
console.log(newobj);



//Q5
const newArray1 = [2,6,4,6,74]

const findNew = Math.min(...newArray1)

const finIndex = newArray1.indexOf(findNew)
console.log(finIndex);


const findMax = Math.max(...newArray1)

console.log(findMax);

const findMaxIndex = newArray1.indexOf(findMax)

console.log(findMaxIndex);



const personObj = [{
  id: 1,
  name: "syed",
  age: 25
},{
  id: 2,
  name: "tariq",
  age: 45
}, 
{
  id: 3,
  name : "kashif",
  age: 65
}, 
{
  id: 4,
  name: "waqar",
  age: 22
}
]

const findMaxAge = []

const findPerson = (arr)=> {
  for (let i = 0; i < arr.length; i++) {
  
    if(arr[i].age){
      findMaxAge.push(arr[i].age)
    }

    // for (let j = 0; j < arr[i].length; j++) {
      
    //   if(arr.)
      
    }
  
}

findPerson(personObj)

//Q4 find length of the object into array
const MaxAge = Math.max(...findMaxAge)
const findIndex = findMaxAge.indexOf(MaxAge)
console.log(findIndex);


const findLength = personObj.filter(arr => arr.id)

console.log("length", findLength.length);



//Q5 find Odd and Even


// const number = prompt("enter the number")
const number = [0,1,2,3,4,5,6,7,8,9,10]

const findNum = number.forEach(arr => arr % 2 == 0 ? "Even" : "Odd")

const findEven = number.filter( arr => arr % 2 == 0)
const findOdd = number.filter( arr => arr % 2 !== 0)

console.log("Find Even",  findEven);
console.log("Find ODD",  findOdd);


console.log(findNum);