/*variables
var let const
*/
// var
// it is a function scope 
function a(){
    var i=10;
    if(i>5){
        var m="hi"
        console.log(m); //hi
    }
    console.log(m); //hi
}
console.log(m) //refrence error because var can have only scope inside function 
console.log(window.m)// when ever inside the function we create a var variable it is local variable t convert global just add window.variablename(window.a) ir will execute successfullly
a()
// // // it self it add window object
// //if any function or any var variable declare globally it become a method of window object.
// // // suppose like alert("hello")==window.alert("hello") both are same
 var a="ram"
console.log(a);   //ram
console.log(window.a);  //ram 
console.log(window.a==a); //true

// // // we can use var variable before initialization
console.log(b); //undefined not a error 
var b="babu" //decleration move to the top of initialzation with undefine
console.log(b); //babu

// let
// es6
// making java script more predictable and reducing commom programming errors associated with var
// it is brace scope i.e{}
function c(){
    let j=10;
    if(j>5){
        let n="hi"
        console.log(n); //hi
    }
    console.log(n); //reference error becauses let scope inside the brace 
}
// console.log(n)
// console.log(window.n)
c()
// // it does not add window object it self
 let a="ram"
console.log(a);   //ram
console.log(window.a);  //undefined
console.log(window.a==a);//false

// // we can't use let variable before initialization
console.log(b); //undefined not a error (temporal dead zone tdz) this line inside the tdz 
// tdz means time period between when a scope start (like beginning of a function or block ) adn when the variable is offically declared
let b="babu" //decleration move to the top but initialzed with undefine        decleration done tdz end here
console.log(b); //babu


// data types;
// two types primitive non primitive
// primitive data types
// it hold a value at a time
// not an Object
// immatabe means can't change it's value
// number,string,boolean,undefine,null,symbol
// number
// both integer and floating values
// it will be show blue color in complier
// let a=10+1.0
console.log(a);//11
console.log(typeof a);

// strings
// collection of characters enclosed by double quotes
// it will show block color in compiler
// // if suppose
// // 10+"11"=1011 it is string not addition it do concatenation
let b=10+"11"
console.log(b);
console.log(typeof b);

// if we adding 2 no we say addition
// // if we adding 1 no one String we sat concatenation
let c=10
let d=20
console.log("sum of number is "+c+d); //sum of number is 1020
// //to reslove this we use boardmass rule
// // () 1st
// // % 2nd
// // * 3rd
// // + - 4th
console.log("sum of number is "+(c+d)); //sum of number is 30

// // boolean
// // true or false
console.log(typeof true);
console.log(typeof false);

// undefined
// // the variable is declared but not assined value to that variable
// //it represent emptyness
let f;
console.log(f);//undefined
 
// //null
// // null is assignment value.
// // it is used by the developer to indicate that variable is empty purpose
// // also tell i know this variable exists and i am explicitly telling you  it has no value
// //ex If you fetch a user's profile and they haven't uploaded a bio, the database might return null for the bio field.
let user1 = { name: "John" };
user = null; // We are explicitly saying there is no user anymore.

// Type It is its own type: undefined      It is an object (historical JS bug)
// Origin Provided by JS engine by default                Assigned by the developer manually
// Conversion to NumberBecomes NaN (Not a Number)        Becomes 0
// console.log(typeof null) //object it is a bug in js it will be never fixed
let a;           // undefined
let b = null;    // null

console.log(a + 5); // NaN (because you can't add 5 to something unknown)
console.log(b + 5); // 5   (because null is treated as 0 in math)

// non-primitive data types
// it hold multiple values at a time
// it is an Object
// it is mutable means we can change its value
// array
// console.log(typeof []); //object
// let arr=[1,2,3,4,5]
// console.log(arr);
// arr[0]=10
// console.log(arr);
// object
// A JavaScript object is the exact same thing: a container for named values, which we call **key-value pairs**.
// - The **key** is the label (a `string` or `Symbol`).
// - The **value** is the data (it can be *any* data type: a number, a string, a boolean, an array, or even another object).
// **An object is a collection of labeled data.**
// Think of a real-world object, like a person. A person has properties with labels and values:
let person = {
  name: "Alice", // Key is "name", Value is "Alice"
  age: 30,       // Key is "age", Value is 30
  isStudent: true // Key is "isStudent", Value is true
};

// CRUD operations on Object
// creating a object
const user={
    name:"ram",
    age:19,
    Email:"abc@gmail.com"
}
//reading a object
console.log(user)
console.log(user.name)
console.log(user.age)
//updating a object
user.age=20
user["Email"]="xyz@gmail.com"
console.log(user)
//deleting a object property
delete user.Email
console.log(user)

// // level up

const user2={
    name:"babu",
    age:50,
    Email:"babu@gmail.com"
}

//name and age and email the object how the keys store in the memory
// behind the scenes it store like this "name" "age" "Email" to proving this we use 
console.log(user2["name"]) //babu  or console.log(user2.name) both are same
console.log(user2["age"]) 
console.log(user2["Email"]) 

// supoose i need to add a new key like home address:"adb"
// i write like this it will give error(undfined) to solve this we use "home address" :"adb"
//i will access like console.log(user2["home address"]) not user2.home address it will give error
const user2={
    name:"babu",
    age:50,
    Email:"babu@gmail.com"
    home address:"adb"
}
console.log(user2.home address) //error
const user2={
    name:"babu",
    age:50,
    Email:"babu@gmail.com",
    "home address":"adb"
}
console.log(user2["home address"]) //adb
//that why we use bracket notation when the key has special characters or spaces. 
const user2={
    name:"babu",
    age:50,
    Email:"babu@gmail.com"
}

//to access keys 
console.log(Object.keys(user2)); //[name, age, Email]
//to access values
console.log(Object.values(user2)); //[babu, 50,babu@gmail.com]
//to access both keys and values
console.log(Object.entries(user2));// [[name,babu],[age,50],[Email,babu@gmail.com]]

const user2={
    name:"babu",
    age:50,
    Email:"babu@gmail.com"
}
const user3=user2 // it is not a copy it is reference assignment both point to same memory location(copy by reference)
user2.age=20
console.log(user3.age); //20
//changes done in user2 and user3 both because both point to same memory location

//loops in object
// in object we use for...in loop
const user4={
    name:"babu",
    age:50,
    Email:"babu@gmail.com"
}
for(let keys in user4){
    console.log(keys);
}
for(let values in user4){
    console.log(user4[values]);//why we dont write like this user4.values if we write like this it will give keysname undefined it checks key with name values not the value of key
}
for(let entries in user4){
    console.log(entries, user4[entries]);
}

// creating two variables and stroing keys and values in that
let name=user4.name //or user4["name"]
let age=user4.age //or user4["age"]
// it is not a good practice to solve this problem we use destructuring
const {name,age}=user4 //destructuring
console.log(name,age);
//assigning name to that variable just like aliasing or renaming
const {name:username,age:userage}=user4
console.log(username,userage); 
const {name as username,age as userage}=user4
console.log(username,userage);

// // for...of loop we cant use in object directly because it is not iterable
// but we can use it with Object.keys() , Object.values() , Object.entries()
//beacause these methods return iterable objects like array
for (let keys of Object.keys(user4)){
    console.log(keys);
}
//name age
for (let values of Object.values(user4)){
    console.log(values);
}
// babu 50 
console.log( Object.entries(user4));// [[name,babu],[age,50],[Email,babu@gmail.com]]

// it iterate over array of arrays then it print each array below given
for(let entries of Object.entries(user4)){
    console.log(entries);
}
// [name,babu] [age,50] [Email,babu@gmail.com]
to solve this we use destructuring inside for...of loop
for(let [keys,values] of Object.entries(user4)){
    console.log(keys,values);
}
// name babu age 50 Email

create a function in object 
const user4={
    name:"babu",
    age:50,
    Email:"babu@gmail.com",
    run:function(){
        console.log("running");
    }
}
user4.run(); //running
//shortcut to create function in object
const user4={
    name:"babu",
    age:50,
    Email:"babu@gmail.com",
    run(){
        console.log("running");
    }
}
user4.run(); //running

// //returning a value from function inside object
const user4={
    name:"babu",
    age:50,
    Email:"babu@gmail.com",
    run:function(){
        console.log("running");
        return "ran successfully"
    }
}
let v=user4.run()
console.log(v);

// // // this keyword in object function
const user4={
    name:"babu",
    age:50,
    Email:"babu@gmail.com",
    run:function(){
        console.log("running");
        return "ran successfully"
    }
}
let v=user4.run()
console.log(v);
console.log(this); //window object
console.log(this.user4); //undefined because this point to window object and user4 is not a property of window object

//nested object
 const user4={
    name:"babu",
    age:50,
    Email:"babu@gmail.com",
    address:{
        city:"ADB",
        state:"ts"
}
}
console.log(user4) //entire object
console.log(user4.address) //{city:"ADB", state:"ts"}
console.log(user4.address.city) //ADB

const user5=user4 //copy by reference both point to same memory location
//to make independent copy we use spread operator
const user5={...user4} //shallow copy
user4.address.city="hyd"
console.log(user5.address.city); //hyd because it is shallow copy only 1st level it make copy not the nested object
//to make deep copy we use 


const User4 = {
  name: "ram",
  age: 20,
  address: { // A nested object
    city: "adb"
  },
  roles: ["editor", "viewer"] // An array
};

// Use the built-in function to create a deep copy
const deepClone = structuredClone(User4);

// --- Let's prove it's a deep copy ---

// 1. Change a top-level primitive in the clone
deepClone.age = 31;

// 2. Change a property in the NESTED object
deepClone.address.city = "hyd";

// --- Check the original object ---
// Everything is completely untouched!
console.log(User4.age);              // 20
console.log(User4.address.city);     // "adb"
console.log(User4.roles);            // ["editor", "viewer"]

 // Array;
 // it is non primitive data type
// it is an object
// it hold multiple values at a time
// it is mutable
//  array is a collection of items stored at contiguous memory locations
// eac h item can be accessed by its index
//array in js is dynamic in nature if we assign more elements it will increase its size automatically

let marks1 = 100;
 let marks2 = 50;
let marks3 = 70;
let marks4 = 80;
 // to solve this problem we use array
// let marks = [100,50,70,80,90];

 console.log(marks);
 console.log(marks.length);

 let arr = [100,30,"Rohit",true];

console.log(arr[2]);
console.log(typeof arr);

arr[1] = 90; // or arr.push(90);
console.log(arr);

push : Insert element at end

 arr.push(90);
arr.push("Strike");

console.log(arr);

// // pop operation: Delete element from end
arr.pop();
console.log(arr);

// unshift : add element at starting
arr.unshift(10);
arr.unshift(50);
console.log(arr);

// shift : delete element from starting
arr.shift();
console.log(arr);

 let arr = [10,30,50,90,11];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//for ...of loop
for(let num of arr){
    console.log(num);
}

 let arr = [10,30,50,90,11];
 let arr2 = arr;

arr2.push(30);

console.log(arr);// chnages in arr2 reflect in arr because both point to same memory location
Object(non primitive): Copy by reference hote hai
Primitive: Copy by value

const arr = [10,30,50,90,11];
arr[2] = 30;
console.log(arr);


/cnst arr = [10,30,50,90,11];
arr[50,70,80];//  it will not add these elements in array beacuse we create a seperate array with these elements it will not add in arr  above array address and this array address is different 
console.log(arr);

const arr = [10,30,50,90,11];
arr[2] = 30; // 
console.log(arr);  //here we are updating the value at index 2 the address is same only value is changed

///slice and splice
// in array slice and splice both are used to remove elements from array 
//  slice does not modify original array it return new array with selected elements
const arr = [10,30,50,90,11];
const arr2 = arr.slice(2,4);  //start from index 2 to index 4-1
console.log(arr2); //[50,90]
// //  where as splice modifies original array and return removed elements
 arr.splice(1,3);// start from index 1 remove 3 elements and add "Rohit" and 19 at index 
 console.log(arr);//[10,11]
const arr3 = arr.splice(1,3,"Rohit",19);
console.log(arr3);//[30,50,90]

//merging arrays
const arr = [10,30,50,90,11];
const arr2 = ["Rohit",11,true];
const arr4 = [90,4,false];

 arr.push(arr2);
const arr3 = arr.concat(arr2,arr4); // [10, 30, 50, 90, 11, 'Rohit', 11, true, 90, 4, false]
 const arr3 = [arr,arr2,arr4];// ) [Array(5), Array(3), Array(3)]

// spread operator

const arr3= [...arr,...arr2,...arr4];
console.log(arr3);


 const names = ["Alice", "Rohit","Bob","Mohit", "Charlie",];

console.log(names.toString()); //Alice,Rohit,Bob,Mohit,Charlie
 console.log(names.join("-")); //Alice-Rohit-Bob-Mohit-Charlie
console.log(names.indexOf("Bob")); //2 if element not found it return -1
 console.log(names.lastIndexOf("Bob")); //2
 console.log(names.includes("Bobs")); //false it tell whether the array contains a specific element or 

names.sort();// it sort in ascending order based on unicode values called ascci values
names.reverse(); //it reverse the array
console.log(names); // ['Charlie', 'Mohit', 'Rohit', 'Bob', 'Alice']

const a = ["101","90","80","32","91"];
 const arr = [10,"Rohit","Mohan",true];

arr.sort();
console.log(arr);

const arr = [10,40,31,71,5,11];

 arr.sort((a,b)=> a-b);
// // ascending order

arr.sort((a,b)=> b-a); // if subtraction is -ve it means b is greater than a so b will come first
// if subtraction is +ve it means a is greater than b so a will come first
// 40,10
// a = 10
// b = 40
// 10,31, 40
// a = 10
// b = 31
// -ve : pehle a aayega fr aayega
// +ve: b aayega fr a aayge
console.log(arr);

// flat in array
// const arr = [10,30,50,[40,90,[60,19,99],11], 80];

const a = arr.flat();// it flaten only 1 level deep measn it remove only 1 level of nested array output: [10, 30, 50, 40, 90, Array(3), 11, 80]
const a = arr.flat(Infinity);// it flaten all level deep
console.log(a);
console.log(arr[3][2][1]);


const a = [10,309,"Rohit",9.3, true];
a.name = "Moahn";
console.log(a);



Functions in js
// it is a block of code designed to perform a particular task

function run(){
    console.log("running");
}
run(); //running

function run(){
    console.log("running");
}
console.log(run()); //running 
// undefined because function run does not return any value so by default it return undefined


function run(){
    console.log("running");
    return "ran successfully"
}
console.log(run()); //running
                    //    ran successfully
function greet(){
   console.log("Hello Ji, Kaise ho")
}
function meet(callback){
    console.log("I am going to meet someone");
    callback();
    console.log("I have finished meeting");
}
meet(greet); // first meet function will execute meet function passing greet arrugument greet go to callback place inside the meet function callback() will execute after that below console.log will execute


function greet(){
   console.log("Hello Ji, Kaise ho")
}
// function dance(){
//     console.log("I am dancing");
// }
function meet(callback){
    console.log("I am going to meet someone");
     greet(); // (hardcode)it is not good way 
//if suppose i need to execute dance() is not possible only i can call either greet() or dance() to solve this see below code 
// it is hardcode we need to do function as reusable 
    callback();
    console.log("I have finished meeting");
}
meet(greet); // I am going to meet someone    Hello Ji, Kaise ho    I have finished meeting
// suppose i need to 
// meet(dance);

function greet(){
   console.log("Hello Ji, Kaise ho")
}

function dance(){
    console.log("I am dancing");
}

function meet(callback){
    console.log("I am going to meet someone");
    // dance(); hardcode (Reusable)
    // code hota jisko marta
    callback();
    console.log("I have finished meeting");
}
meet(greet);
meet(dance)


// real world example for callbacks
function Placed(){
    console.log("We have started preparing your food");
}
function payment(amount){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    Placed();
    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}
payment(500);

// using callback 

function Placed(){
    console.log("We have started preparing your food");
}
function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();
    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}
payment(500,Placed);


// callback for multiple function
function blinkitOrderPlaced(){
   console.log("We have started packing your Order");
}
function Placed(){
    console.log("We have started preparing your food");
}
function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();
    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}
payment(500,Placed);
payment(200,blinkitOrderPlaced)


//  function

// function greeting(){
//     console.log("Hello Coder Army, Strike is coming on 18 october");
//     return 10;
// }


// function addNumber(num1,num2,num3=0,num4=0){
    
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// greeting();
// addNumber(3,4);

// rest operator
// function addNumber(...num){
   
//     let sum=0;

//     for(let n of num){
//         sum+=n;
//     }

//     console.log(sum);
    
// }


// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)

// console.log(greeting());


// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10]

// const [first,second, ...num] = arr;
// console.log(first,second, num);

// const ans = [arr,arr2];
// console.log(ans);



// function: expression

// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;
// }




// const addNumber =function(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,4));


// arrow function

// ()=>{

// }

// const addNumber = (num1,num2)=>{
//    return num1+num2;
// }

// let arr = [10,11,19,7,50];

// arr.sort((a,b)=>b-a);
// console.log(arr);

// const addNumber = (num1,num2) => num1+num2;


// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;



// // console.log(addNumber(3,4));
// console.log(squareNumber(6));


// const greeting = ()=> {
//     return {
//         name:"Rohit",
//         age:20,
//     }
// }


// const greeting = ()=> ({ name:"Rohit",age:20});


// console.log(greeting());


// IIFE

// (function greeting(){
//     console.log("Helloji");
// })();

// (()=>{
//     console.log("hi");
// })();




// function greet(){
//     console.log("Hello Ji, Kaise ho")
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance(); hardcode (Reusable)
//     // code hota jisko marta
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);

// blinkit

// function blinkitOrderPlaced(){
//     console.log("We have started packing your Order");
// }

// function zomatoOrderPlaced(){
//     console.log("We have started preparing your food");
// }

// function payment(amount,callback){
//     console.log(`${amount} payment has initilized`)
//     console.log("Payment is received");
//     callback();

//     // GST: Government
//     // Rider ko kitna payment dena
//     // company ko kitna 
// }

// payment(500,zomatoOrderPlaced);
// payment(300,blinkitOrderPlaced);