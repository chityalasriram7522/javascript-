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
let a=10+1.0
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
let user = { name: "John" };
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
console.log(typeof []); //object
let arr=[1,2,3,4,5]
console.log(arr);
arr[0]=10
console.log(arr);
// object
console.log(typeof {}); //object
let obj={name:"ram",age:22}
console.log(obj);
obj.age=23
console.log(obj)
