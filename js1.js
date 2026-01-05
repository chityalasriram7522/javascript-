function outer() {
    const message = "Hello";

const { createElement } = require("react");

    function inner() {
        console.log(message);  // Accesses outer's variable
    }

    return inner;  // Return the function
}
const re=outer()
// re()
const myFunction = outer();  // outer() finishes executing
myFunction();  // "Hello" - but how does it still remember "message"?

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


//before and after
const abbb=document.getElementById("one");
let a=document.createElement("h3");
a.textContent="good job"
a.id="four"
a.className="new"
abbb.after(a);
abbb.before(a);

a.className="new"
a.className="old" // it override the new to old

a.className="new"
a.className+="old" //combien new and old to newold become only one class not two

a.className="new"
a.className+=" old" //it give two seperate class name

//classlist is used to assgin mutliple class
a.classList.add("new")
a.classList.add("old")
a.classList.add("vintage") 

//to stlye tag using dom
a.style.backgroundColor="blue"
a.style.color="white"

//getelement
a.getAttribute("id")// four
a.getAttribute("class") // new

setattribute
a.setAttribute("hello","ji"); //ji
a.setAttribute("class","old"); //old

const un=document.getElementById("listing");
const l=document.createElement("li");
l.textContent="milk"
un.append(l)

const l1=document.createElement("li");
l1.textContent="cake"
un.append(l1)

const list=document.createElement("li");
list.textContent="halwa"
un.append(list)

const l3=document.createElement("li");
l3.textContent="water"
// un.prepend(l3)
// l.after(l3)
// un.children[0].after(l3)

//this process distrib the ui
const arr123=["milk","cake","halwa","water"];
const un=document.getElementById("listing");
for(let item of arr123){
    const a=document.createElement("li");
       a.textContent=item;
       un.append(a);
}


const arr123=["milk","cake","halwa","water"];
const un=document.getElementById("listing");
const frag=document.createDocumentFragment();
for(let item of arr123){
    const a=document.createElement("li");
       a.textContent=item;
       frag.append(a); // all the itemsa are append in frag
    //    un.append(frag)// same distrub the ui
}
un.append(frag) ;// it show all at one time

const event1=document.getElementById("event");
function handle(){
    event1.textContent="good morning guys"
}


const event1=document.getElementById("event");
it it overrided just like variable
event1.onclick=function handle(){
    event1.textContent="mawaa"
}
event1.onclick=function handle(){
    event1.textContent="guys" //override the mawaa to guys
}

it is method not overrided 
event1.addEventListener('click',()=>{
    event1.textContent="heeee"
})
event1.addEventListener("click",()=>{
    event1.style.backgroundColor="pink"
})

let a={
    b:20,
    fun:function(value){
        console.log("hello",value);
        
    }
}
a.fun(10);// hello 10
a.fun(20);// hello 20 it is similar to addeventlistener
a.b=30// b=30
a.b=40//override b value to 40 it is similar to event1.onclick=func....

const child=document.getElementById("child1")
child.addEventListener("click",()=>{
    child.textContent="hahah"
})

const parent=document.getElementById("parent")
 using target
parent.addEventListener("click",(e)=>{
    e.target.textContent="thank"
})
without target
console.log(parent.children);
for(let node of parent.children){
    node.addEventListener("click",()=>{
        node.textContent="haaahahahah"
    })
}

capture phase
target phase
bublling phase
 const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    // console.log(e.target);
    console.log("GrandParent is clicked");
},false)

const parent = document.getElementById("parent");
parent.addEventListener('click',()=>{
    // console.log(e);
    console.log("Parent is clicked");
},false)

const child = document.getElementById("child");
child.addEventListener('click',()=>{
    // console.log(e);
    // e.stopPropagation();
    console.log("child is clicked");
},false)

capture phase is default false if it is false print down to top(c to g) if it is true top to down (g to c)
target phase which place we clicked and where we need to travers
bubllig phase start when target pahse reached it back to th window to that window any event present perform it
 const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    // console.log(e.target);
    console.log("GrandParent is clicked");
},true)

const parent = document.getElementById("parent");
parent.addEventListener('click',()=>{
    // console.log(e);
    console.log("Parent is clicked");
},true)

const child = document.getElementById("child");
child.addEventListener('click',()=>{
    // console.log(e);
    // e.stopPropagation();
    console.log("child is clicked");
},true)

passing value in function
const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{  //if we pass the value in function it return taotal infromation about the event like whcih palce do you cliked like x and y axis like that 
    console.log(e.target);  //target helps which element is clicked 
})
const parent = document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    console.log(e);
})

const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    console.log(e);
    e.stopPropagation();  //to stop bubllling we use stoppropagation return only which we click that only performed
})

 
why js is single thread synchronuous langauage

This ALWAYS runs in order. 
JavaScript can't execute Second and Third simultaneously. 
It's like a single-lane road - cars must go one at a time.
console.log("first") //this task complete then it will go for next line 
console.log("second") // if it will do this  task then it will go forther
console.log("third")  //same 

Synchronous = Blocking
First Principle:Each line blocks the next line until it completes.
function abcd(){
    let sum=0;
    for(let i=0;i<500;i++){
        sum+=i;
    }
    console.log(sum);
}
console.log("first");
abcd()
console.log("second");

Your browser freezes during abcd().
You can't click buttons, scroll, or do anything. This is the problem.

 Web APIs: JavaScript's Helpers
First Principle The browser provides APIs that run OUTSIDE JavaScript's single thread.

console.log("first");  //1
setTimeout( ()=>{
    console.log("second"); //3
},3000)
console.log("third");  //2

JavaScript calls `setTimeout`
The BROWSER takes over the timer (not JavaScript)
JavaScript continues to line 3 immediately
After 2 seconds, browser says "hey, run this callback"

Event Loop:
First Principle:The event loop connects the single-threaded JavaScript with async Web APIs.

console.log("first");
setTimeout( ()=>{
    console.log("second");
},3000)
Promise.resolve().then(() => {
  console.log('four');
});
console.log("third");

Why this order Let me show you the mechanism:
CALL STACK (JavaScript's single thread)
[main code runs here, one line at a time]
WEB APIs (Browser's territory)
[setTimeout timers, fetch requests, DOM events]
TASK QUEUES (Waiting area)
- Microtask Queue (Promises) - HIGHER PRIORITY
- Macrotask Queue (setTimeout, setInterval) - LOWER PRIORITY

 Step-by-Step Event Loop Example
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve()
  .then(() => console.log('C'))
  .then(() => console.log('D'));
console.log('E');
Output: A, E, C, D, B

1.Call Stack:Execute `console.log('A')` → Output: "A"
2.Call Stack:See `setTimeout` → Send to Web API → Continue
3.Call Stack:See `Promise.resolve()` → Add to Microtask Queue → Continue
4. Call Stack:Execute `console.log('E')` → Output: "E"
5. Call Stack Empty! Event loop checks:
    - Microtask Queue first: Execute `C` → Output: "C"
    - Another microtask: Execute `D` → Output: "D"
    - Macrotask Queue: Execute `B` → Output: "B"


// Common Web APIs

// Timer APIs
setTimeout(() => {}, 1000);
setInterval(() => {}, 1000);
// Network APIs
fetch('https://api.example.com')
  .then(response => response.json());
// DOM Events
document.getElementById('btn').addEventListener('click', () => {
  console.log('Clicked!');
});
// File APIs
fs.readFile('file.txt', (err, data) => {
  console.log(data);
});

1. Single-threaded:JavaScript has ONE call stack
2. Synchronous: Code runs line-by-line, blocking
3. Web APIs: Browser provides async operations (timers, network, events)
4. Event Loop:Checks if call stack is empty, then moves tasks from queues
5. Queues:Microtasks (Promises) run before Macrotasks (setTimeout)

This is why JavaScript can handle async operations despite being single-threaded - it delegates to the browser/runtime!

callback hell 
nothing but callbacks 