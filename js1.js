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
