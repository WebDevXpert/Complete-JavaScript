// document.getElementsByTagName('h1')[1].style.backgroundColor = "blue"
// document.getElementsByTagName('h1')[0].style.backgroundColor = "orange"

// 1. Ways to print in JavaScript
// console.log("Hello World")
// alert("me")
// document.write("This is document write")

// 2. JavaScript Console API(Application Programming Interface)

// console.log("Hello World", (25 * 35), "another log")
// console.warn("This is warning")
// console.error("This is an error")
console.assert(12 == 12)
// console.clear()

// 3. What are Variables? - Containers to store data values
var number1 = 34;
var number2 = 61;
// console.log(number1+number2)

// 4. Datatypes in JavaScript
// String
var str = 'This is string 1'
var str2 = "This is string 2"
// console.log(str)

// Number
var num1 = 78;
var num2 = 222;
// console.log(num1, num2)

// Objects
var marks =
{
        Haris: 50,
        Saad: 60,
        Ali: 70
}
// console.log(marks)

// Booleans
var a = true
var b = false
// console.log(a, b)

// undefined
var und = undefined // undefined is default value, it means if we remove undefined from this line, phir b undefined print hoga
// console.log(und)

// null
var n = null
// console.log(n)


/*
At a very high level, there are two types of datatypes in JavaScript
1. Primitive datatypes: undefined, null, number, string, boolean, symbol
2. Reference datatypes: Arrays and Objects
*/

// Arrays
var arr = [0, 1, 2, 'Haris', 4, 5]
// console.log(arr)
// console.log(arr[3])

// Operators in JavaScript
// Arithmetic Operators
var a = 50;
var b = 30;
// console.log("The value of a + b is ", a+b)
// console.log("The value of a - b is ", a-b)
// console.log("The value of a * b is ", a*b)
// console.log("The value of a / b is ", a/b)

// Assignment Operators
var c = b;
c *= 3 // means c = c * 3
// c +=3
// c -=3
// c /=3
// console.log(c)


// Comparison Operator
var x = 50;
var y = 20;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x<y)
// console.log(x>y)

// Logical Operators
// Logical AND Operator
// The value will be true when both are true
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false &&false)

// Logical OR Operator
// The value will be true when at least one is true
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical NOT Operator
// It will change true into false and false into true by giving exclamation mark
// console.log(!false)
// console.log(!true)

// Functions in JavaScript

function avg(a, b, c) {
        return (a + b + c) / 3
}
// DRY = Do not repeat Yourself
c1 = avg(20, 30, 40)
c2 = avg(50, 60, 70)
// console.log(c1, c2)

// Conditional Statements

/* var age = 18;
if(age>=18){
        // console.log("You can vote")
}
else{
        console.log("You cannot vote")
}

// If - Else Ladder

age = 15;
if(age==20){
        console.log("You can vote")
}

else if(age==30){
        console.log("You can vote as an adult")
}
else if(age>=18){
        console.log("You can vote as an elligible voter")
}

else if(age<=10){
        console.log("You can vote as a kid")
}

else{
        console.log("You cannot vote")
}
*/

// Loops

var arr = [1, 2, 3, 4, 5];
// for Loop
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
        if(i==3){
                /*break and continue statements
                  break;
                  continue;*/
        }
        // console.log(arr[i]) 

}

// Foreach Loop
// arr.forEach(function(element){
//         console.log(element)
// })

// while Loop
arr = [20, 'Haris', 'Ali', 40];
let j = 0;
// while(j<arr.length){
//          console.log(arr[j])
//          j++;
// }

// do while Loop
// let k = 0;
// do{
//         console.log(arr[k])
//         k++
// }while (k < arr.length)

// Array Methods in JavaScript
// 1. Array length
let arr2 = ["Haris", 34, true, null, 'char'];
// Array pop
// arr2.pop() It will pop up the last datatype from the Array
// console.log(arr2.length)

arr2.push("Ali"); // It will simply push Ali in Array
// arr2.sort(); // It will sort out the array
// arr2.shift(); // It will remove the first element from the array
const newLen = arr2.unshift("Hasaan")
// console.log(newLen)
// console.log(arr2)

// String Methods in JavaScript

let myString = "Haris is learning JavaScript";
// console.log(myString);
// console.log(myString.length); // It will give the length of string
// console.log(myString.indexOf("Haris")) // It will give the index of first Haris
// console.log(myString.lastIndexOf("Haris")) // It will give the index of second Haris

// console.log(myString.slice(0,4)) // It will simply give the number of starting and ending of the string. The numbers which we gave as an argument

d = myString.replace("Haris", "Ali")
// console.log(d)

// Date Methods in JavaScript
let myDate = new Date()
// console.log(myDate) // It will standard date
// console.log(myDate.getTime()) // It will give time in seconds
// console.log(myDate.getFullYear())
// console.log(myDate.getMinutes())
// console.log(myDate.getMonth())
// console.log(myDate.getHours())
// console.log(myDate.getDate())
// console.log(myDate.getDay())

// DOM (Document Object Module) Manipulation

let elem = document.getElementById('btn');
// console.log(elem);
elem.style.fontSize = "25px"

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

elemClass[0].style.background = "yellow"
elemClass[1].classList.add("bg-primary")
elemClass[1].classList.add("bg-success") // How to add a class
elemClass[1].classList.remove("bg-success") // How to remove a class with javascript                                                                                                                                                                                                                   
/*console.log(elem.innerHTML)
  console.log(elem.innerText)
  console.log(elemClass[0].innerText)
  console.log(elemClass[1].innerHTML)*/

  let elemTag = document.getElementsByTagName('div');
//   console.log(elemTag)
  newElement = document.createElement('h1')
  newElement.innerHTML = "This is heading to write HTML with JavaScript"
  elemTag[0].appendChild(newElement) // That's how you can write HTML in javaScript
  
  newElement2 = document.createElement('b')
  newElement2.innerHTML = "This is a bold content to understand how to replace append child"
  elemTag[0].replaceChild(newElement2, newElement) // That's how you can replace append child

//   elemTag[0].remove(newElement2) // That's how you can remove appendChild

// Query Selector

elemSelector = document.querySelector('.container')
// console.log(elemSelector)
elemSelector = document.querySelectorAll('.container')
// console.log(elemSelector)


function clicked() {
        // console.log("The button was clicked.") // when we click on button, this statement will be print in console
}

window.onload = function () {
        // console.log("The window was loaded.") // when the window will be loaded, it will print this statement in console
}

// Events in JavaScript

// firstContainer.addEventListener('click', function(){ // Here click is an event
//         document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//         console.log("Click on Container")
// })

firstContainer.addEventListener('mouseover', function(){ // mouseover event means whenever the mouse go inside the container then this function will be fire
        // console.log("Mouse was on the container")
})

firstContainer.addEventListener('mouseout', function(){ // mouseout event means whenever the mouse go outside the container then this function will be fire 
        // console.log("The mouse was out of container")
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
        document.querySelectorAll('.container').innerHTML = prevHTML
        // console.log("The mouse up when clicked on container")
})

firstContainer.addEventListener('mousedown', function(){
        document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
        // console.log("The mouse down when clicked on container")
})

// Example of Function
// function summ(a, b) {
//         return a+b;
// }

// Example of Arrow Function
// summ2 = (a, b)=>{
//         return a+b;
// }


// setTimeout and setInterval
// settimeout takes two arguments: function and time in milliseconds
let func = ()=>{
        document.querySelectorAll('.container')[1].innerHTML = "<b>Set Interval Fired</b>"
        console.log("I am your function")
}
clr = setTimeout(func, 2000)
// clearTimeout(clr)

// clr = setInterval(() => {
//         console.log("I am your function in Set Interval")
// }, 2000);
// clearInterval(clr)
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// Local Storage in JavaScript
// Local storage helps to store data in user's computer as a string

// localStorage.setItem('name', 'Haris') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// JSON
// obj = {name: "Haris", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"Haris","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template Literals - Backticks
 a = 788;
 console.log(`My number is ${a}`);