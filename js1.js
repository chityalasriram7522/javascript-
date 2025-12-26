function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);  // Accesses outer's variable
    }

    return inner;  // Return the function
}
const re=outer()
re()
// const myFunction = outer();  // outer() finishes executing
// myFunction();  // "Hello" - but how does it still remember "message"?
