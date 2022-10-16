"use strict";

function getinnerText() {
    let text = document.getElementById("myP").innerText;
    document.getElementById("demo").innerText = text;
  }

  function getinnerHTML() {
    let text = document.getElementById("myP").innerHTML;
    document.getElementById("demo").innerText = text;
  }

const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
console.log(ages);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Banana");
console.log(fruits);


const a1 = [55, 20, 10, 5];
const b1 = a.includes(5);
console.log(b1);

console.log(typeof undefined == typeof Null);

var obj = {a: 1 ,b: 2, c: {age: 30}}
var objclone = Object.assign({},obj);
console.log(objclone);

obj.c.age = 40;

console.log(obj);

console.log(typeof typeof 1);
console.log(typeof NaN);

var a = [1,2,3]
a[10] = 99

console.log(a);
console.log(a[6]);

var b = [undefined];
b[2] = 1;
console.log(b);
console.log(b.map(e => undefined));

var myArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArry = ["start", ...myArry, "end"];
console.log(myArry);

var newARray = ["start", ...myArry, "end"];

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
  }

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
    var innerVar = 'b';

    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);

    })(456);
})(123);

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
console.log(list);
readHugeList(231123231)

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

const b = {}
[ 'zebra', 'horse' ].forEach(function(k) {
	b[k] = undefined;
});

for (var i = 0; i <= 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button" + i));
  (function (i) {
    btn.addEventListener('click', function() { console.log(i); });
  })(i);
  document.body.appendChild(btn);
}

[1, 2, 3, 4, 5, 6, 7].forEach(function(i) {
    var btn = document.createElement("button")
    btn.appendChild(document.createTextNode("button" + i));
    (function(i) {
        btn.addEventListener('click', function() { console.log(i) })
    })(i)
    document.body.appendChild(btn)
})

const sum = (x,y) => {
    if(y !== undefined){
        return x + y;
    }else {
        return (y) => (x + y);
    }

}

console.log(sum(2,3));
console.log(sum(4)(4));

const isValue = (value) => {
    const isString = value.toString()
    const myStr = value.toString().split("").reverse().join("")
    console.log(isString);
    console.log(typeof myStr);
    console.log(myStr);
    if(isString === myStr){
        return console.log("isPalindrome", true);
    } else {
        return console.log("isPalindrome", false);
    }
;
}

isValue("madam");

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

const newArayy = [];

for (let i = 0; i < titles.length; i++) {
  for (let j = 0; j < posts.length; j++) {
    if (titles[i].id === posts[j].id) {
      newArayy.push({
        id: titles[i].id,
        title: titles[i].title,
        post: posts[j].post,
      });
    }
  }
}
console.log(newArayy);

const arr = [
  [1, 3, 4, 2],
  [4, 5, 3, 5],
  [5, 2, 6, 4],
  [8, 2, 9, 4],
];


const diagonalVal = (arr) => {
    let sum = 0
    
    for(i = 0 ; i < arr.length; i++){
        for(j = 0 ; j < arr[i].length; j++){
        if(i === j){
          sum += arr[i][j]
      }
    }
    }
    return sum
    }
    
    console.log(diagonalVal(arr))

const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = days[new Date().getDay()]
console.log("Today is : " + date);

const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const hours12 = 12 ? hours % 12 : hours;


console.log("CurrentTime is " , hours12 + ":" + minutes + ":" + seconds);


const print = () => {
    window.print()
}


