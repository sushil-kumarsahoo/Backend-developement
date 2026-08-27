# 4 pillars of javascript

# scopes
scopes as a word is closely related to vision i.e what particularly part you can see and what you cannot see.

In javascript, we use the concept of scopes to figure out where a varibale or function is accessible / visible.

But how the scoping mechanism works?

Scoping mechanism in JS is very different than other languages.

# compiled languages
 Ex: c,c++

# interpreted languages
Pure interpreted languages exist for example: Bash
These are those language, which execute our code direct without reading/analysing the whole code prior. They execute line by line , if any line has error , then everything before it gets properly executed and the moment we detect the first error, execution stops.
If there is more code, after the error nothing is executed post we encounter the error.

# hybrid languages
There is kind of like a third category of languages which uses both compilation and interpretation for the final execution of code Ex. Java, JS, Python etc

log("wow wow);
function fun(){
    le r = uy;
}  //syntax error

it gives error coz it is not interpreted only. JS cobines the process of compilation and interpretation

# every JS code is executed in 2 phases:
phase 1: Compilation and scope resolution phase
phase 2: Interpretation or execution phase


console.log("howdy");
console.print("doody");
  
o/p: howdy
// TypeError

# What do you mean by scope resolution?
when we say scope resolution we meamn that we need to allocate the scope and visibiity and every variable altogether

# Types of scopes in JS?
in JS there are multiple type of scopes available:
 - Global scope
 - Function scope
 - Block scope

# Global scope
As the name suggest, global scope refers to the scope where the variable gonna be accessible from anywhere in the program.be it in a func, for loop , while loop, if-else anything.

# function scope
Function scope means visibility of a variable is only inside the function where variable has been defined you cant access outside the function

# Block scope
wherever we define a pair of curly vraces may be with if else while loop for loop etc or may be without anything it creates something called a block

Block is a collection of valid JS instructions enclosed in a pair of curly braces

if{
    //this is a  block
} else {
    //this is a block
}

Any variable defined inside a block has a block scope, which is the third kind of scope.in below code we wont be able to access x because it is defined inside block and due to that it has a block scope, hence it is not visible outside the block

{
    let x = 10;
    console.log(x);//here x is visible
}
console.log(x); // x is not accessible

So is the scope of the variable defined only by where is it declared?
No, scope of the variable is also declared by how it is declared. So, how a variable declared?
we have 3 ways
- var -> var helps us to declare function scoped and global scoped variables. it cant make a block scoped variable with var.
- let -> let helps us to initialize block scoped variable
- const -> const helps us to initialize block scoped variable

Any variable used only in two ways:
- RHS -> whwn we consume the variable
- LHS -> when we assign value or declare the variable

EX:
var x = 99; // LHS
console.log(x); // RHS


# Lexical scoping
JS does scope resolution using lexical scoping mechanism. it is also called as static scoping. in lexical scoping we allocate scopes to the variables during compile time. So in js , values to the variables are allocated in phase two i.e execution phase but scope of the variable is declared during phase 1.

How is function scope is different from block scope?

# dynamic scoping
The language searches for variables in the caller’s environment, not the function’s definition environment.
used by older Lisp dialects, Bash, and some scripting languages

# Comparison Example: Lexical vs Dynamic
https://medium.com/@dev-aditya/lexical-vs-dynamic-scoping-1ee3c50f26ea
# JavaScript (Lexical)
let x = 10;
function foo() { console.log(x); }
function bar() { let x = 20; foo(); }
bar(); // 10
# Bash (Dynamic)
x=10
foo() { echo $x; }
bar() { local x=20; foo; }
bar  // prints 20

# closures
https://medium.com/@aravishack/closures-in-javascript-the-backpack-mental-model-79677501e27a



# autoglobals
when we declare a variable without formal declaration like(x = 99) js scope manager checks for its declaration in current scope if not fpund then one upper level scope if after checking global scope we didnt find its formal declartion then it is treated as a auto global if it is used as a LHS.

var teacher = "sushil sahoo" // formal declaration 
function fun(){
    teacher = "sushil";
    content = "JS"; // autoglobals // encounter as LHS
    console.log("wow", content, teacher);
}

fun();
console.log(teacher);
console.log(content);

o/p :  wow js teacher
       sushil js

if it is used as RHS then it throws error

var teacher = "sushil sahoo"
function fun(){
    teacher = "sushil";
    content = "JS";
    console.log("wow", content, teacher);
}

console.log(teacher); // sushil sahoo
console.log(content);  // error  // encounter as RHS
fun();

to stop autoglobals use "use strict"; in your code

# hoisting
hoisting is a consequence of the scoping mechansim that JS executes.


