# To declare a function the first item of the instruction is the function keyword, So whenever the first token of the instruction to declare a function starts with function keyword we call it as function declaration.

Ex-1 - named function expression

const myFunc = function fun(){
    //...
}

myFunc()

//we cant access fun() function directly

Ex-2 - anonymous function expression

const myFunc = function (x){
    console.log("calling..",x);
}

Ex-3 - arrow function expression

const myfunc = () => {
    console.log("calling");
}

Ex-4 - IIFE

(function fun(x){
    console.log("calling",x);
})();


Here we creatring a function but the first valid tokn is not the function keyword, hence we call thia type of instruction as function expression.


