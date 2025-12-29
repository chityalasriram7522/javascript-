const arr=["1","2","3","4","5","7"];
const run=document.querySelector("h1");
const c=document.querySelector("button")
   c.addEventListener("click",()=>{
   const rand=Math.floor(Math.random()*6)
         run.textContent=arr[rand];
    })
