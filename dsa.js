// // Data Structure and Algorithms

// //Array traversal
// const  a = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// for(let i = 0 ; i < a.length; i++){
//     console.log("Treversing", a[i])
// }

// //Accessing
// let x = 3
// console.log("Accessing", a[x]);

// // Accesing and validation array with input
// const getElement = () => {

//    let input = document.getElementById("text").value
//     if(input < a.length && typeof parseInt(input) === "number"){
//         alert(a[input])
//     }else{
//         alert("Not exists")
//     }
// };

// //Insert Element in Array

// let randomArray = [22,60,59,32]

// let newEl = 99

// let position = 2

// for(let i = randomArray.length - 1; i >= 0; i--){
//     console.warn(randomArray[i] )
//     if(i >= position) {
//         randomArray[i + 1] = randomArray[i]
//         if(i === position) {
//             randomArray[i] = newEl
//         }
//     }
// }
// console.log("insert element manually", randomArray);

// //Insert array Element with input

// function addElement () {
//     let randomArray2 = [24,56,85,64,100]
//     let newElement = document.getElementById("newElement").value
//     newElement = parseInt(newElement)
//     let position = document.getElementById("postion").value
//     position = parseInt(position)
//     console.log(newElement);

//     for(let i = randomArray2.length - 1; i >= 0; i--){
//         // console.warn(randomArray2[i] )
//         if(i >= position) {
//             randomArray2[i + 1] = randomArray2[i]
//             if(i === position) {
//                 randomArray2[i] = newElement
//             }
//         }
//     }
//     console.log("insert manual element with input", randomArray2);
// }

// // Insert Array by Builtin Function
// const arrayRandom = [25,65,45,54]

// arrayRandom.splice(2,0,555)

// console.log("inset splice function",arrayRandom);

// // Deletion Element in Array

// const deleteElement  = () => {

//     let newArray = [25,65,45,21,68,65]

//     let postion = document.getElementById("delete").value
//     postion=parseInt(postion)

//     for(let i = postion; i  < newArray.length - 1; i++){

//         newArray[i] = newArray[i + 1]
//     }
//     newArray.length = newArray.length - 1
//     console.log("delete element", newArray);
//     newArray.splice(2,1)
//     console.log("Delete element by builtin Function", newArray);
// }

//  // Searching Element in array
// //Linear Search
// let newArrayEle = [25,64,34,54,65,23,54,55]
// let findVal = 55
// let index = []
// for(let i = 0; i < newArrayEle.length; i++){
//     if(newArrayEle[i] === findVal){

//         index.push(i)

//     }
// }
// console.log(index);
// //Linear Search builtin function

// console.log(newArrayEle.indexOf(findVal));

//Mergining Arrays

const data = [3, 1, 65, 69, 64, 2];
const data2 = [96, 85, 45, 65, 25];

let newData = [];

for (let i = 0; i < data.length; i++) {
  newData[i] = data[i];
}

for (let i = 0; i < data2.length; i++) {
  newData[data.length + i] = data2[i];
}
console.log("Merging array", newData);

// no of line is 12 + 11 is repeated loop = 23 TIME COMPLEXITY
// no of variable is 4 = Space Complexity

// let data = [2,4,6,8,10,11,12]
// let data2 = [3,5,7,9]
// let data3= []
// let d = 0
// let d2 = 0
// let d3 = 0

// while(d < data.length && d2 < data2.length){
//     if(data[d] < data2[d2]){
//         data3[d3] = data[d]
//         d++

//     }else{
//         data3[d3] = data2[d2]
//         d2++
//     }
//     d3++
// }
// console.log(d3);
// while(d < data.length) {
//     data3[d3] = data[d]
//     d++
//     d3++
// }
// console.log(data3);

// No of line 24 + 11 no of repeated loop =35 TIME COMPLEXITY
// No of variable is 6 SPACE COMPLEXITY

// const newEl = document.createElement("h1")
// newEl.textContent = "Hello World"
// document.querySelector("body").appendChild(newEl)

// function Bank(CustomerName, Balance = 0) {
//     this.CustomerName = CustomerName
//     this.accountNumber = Date.now()
//     this.Balance = Balance
// }

// const MyBalance = new Bank("Ali" , 2000)

// console.log(MyBalance);





