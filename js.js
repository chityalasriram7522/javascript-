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
