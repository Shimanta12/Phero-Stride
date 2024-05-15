/* 
Differences between regular function and arrow function:
    --> Regular function can be used using declaration and function expression. Arrow function can only be used in a function expression.
    --> Regular functions can be accessed before the declaration(Hoisting) whereas arrow function can not be.
    --> Inside of a regular function we can access its parent object using this keyword where as in arrow function it would be undefined.
*/


function greet(name)
{
    console.log(`Hello ${name}!`);
}

let square = function (n) {
    return n*n;
}

let farewell = (name) => console.log(`Goodbye ${name}!`);

greet("Shimanto");
console.log(square(5));
farewell("Shimanto");
