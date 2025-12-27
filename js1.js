// function outer() {
//     const message = "Hello";

//     function inner() {
//         console.log(message);  // Accesses outer's variable
//     }

//     return inner;  // Return the function
// }
// const re=outer()
// re()
// // const myFunction = outer();  // outer() finishes executing
// // myFunction();  // "Hello" - but how does it still remember "message"?

const abbb=document.getElementById("one");
document.documentElement.children[1].children[0].textContent="hello guys"

// both working as same
abbb.textContent="hey hee"; // hello bro converted

const temp=document.getElementById("one")
undefined
temp.innerHTML
'hello bro <span>yoy yoy</span>hahahah'
temp.innerText
'hello bro yoy yoyhahahah'
temp.textContent
'hello bro yoy yoyhahahah'

const abbb=document.getElementById("one");
console.log(abbb.textContent) //hello bro yoy yoy
console.log(abbb.innerText) //hello bro
console.log(abbb.innerHTML)//js1.js:32 hello bro <span style="display: none;">yoy yoy</span>
