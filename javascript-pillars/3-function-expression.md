# To declare a function the first item of the instruction is the function keyword, So whenever the first token of the instruction to declare a function starts with function keyword we call it as function declaration.

Ex-1 - named function expression
```js
const myFunc = function fun(){
    console.log("calling");
}

myFunc()
```
//we cant access fun() function directly

Ex-2 - anonymous function expression

 ```js
const myFunc = function (x){
    console.log("calling..",x);
}
```

Ex-3 - arrow function expression

```js
const myfunc = () => {
    console.log("calling");
}
```
Ex-4 - IIFE

```js
(function fun(x){
    console.log("calling",x);
})();
```

Here we creatring a function but the first valid tokn is not the function keyword, hence we call thia type of instruction as function expression.

# Where can we use these function expressions ?
function expressions can be used to pass a function as an argument to another function

# should we use named function expression or anonymous function expression?

- Named function improves code readability of the code.Anonymous function expressions dont have name we have to read whole logic to understand what they are doing.
- Anonymous functions are hard to debug . Because when you check the call stack of the functions, then you will not find any name for anonymous function expression.

```js
console.trace("call stack") // prints whole callstack
```

- Anonymous functions are hard to use in recursion whereas named functions expression can be easily integrated in a recursive environ ment

array.map()
- map is a inbuilt function for arrays in JS. it takes an argument which is expected to be a function.The function which we pass as an argument is automatically internally called by map function. . This function expression that we pass is expected to have a parameter.Inside this parameter map function automatically passes all the elements one by one. And then whatever is returned collectively by all the function expression calls, the returned values are populated in a new array and returned.

```js
arr.map(function f(element){
    console.log("Elemnt passed", element);
    return element;
});

const arr = [1,2,3,4,5];
const returnVal = arr.map(function f(element){
    return element * 2;
});
console.log(returnVal); // [2,4,6,8,10]
```

Anonymous function expressions are useful when code logic is too simple.


# if you want to make your own map function then

```js
function costomMap(arr, fn){
    const result = [];

    for(let i=0;i< arr.size();i++){
        result.push(fn(arr[i]));
    }
    return result;
}

costomMap(arr, function f(element){
    return element * 2;
})
```

Lets say i want to usee map function to calculate factorial of every single value in an given array. In this case , if we use a recursive approach then we are bound to use named function expression.

```js
arr.map(function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n-1);
})
```

Here to call the function recursively we need to know the function name.Hence named function become superior in this case.

```js
function fact(n){
    if (n==1) return n;
    return n * fact(n-1)
};
```

arr = [1,2,3,4];
arr.map(fact);  // this also works

arr.map(fact());  // this throws error coz it says map function to execute immidiately without n it passes undefined.

 if this syntax is better then why we use function expression why the function expression concept present because if we declare using function keyword then it might be used repetatively and we cant further declare with same name if we declare then it overrides the function. So when we need a function for particular use case like factorial it calculates and ends there so we need function expression.

 There is a depricated function called as a `arguments.callee` which can be used to apply recursion

```js
arr.map(function (n){
    if(n == 1) return 1;
    return n * arguments.callee(n-1);
})

```

# Arrow function -
There is one very fundamental difference in using arrow functions and function expression i.e in arrow function the `this` keyword is resolved lexically whereas in other the `this` keyword is resolved by the call site.

- if arrow function is one line logic i.e to return something then we dont need to use return keyword.

```js
  const square = (x) => x*x;
```

- if the arrow function takes single argument then there is no need of parenthesis.

``` js
 const square = x => x*x;
```

# IIFE
a function expression who is called the moment we define it is called IIFE.

```JS
(function square(x){
  console.log("called",x);
})(10);
```

To define an IIFE, we first wrap a function inside a pair of parenthesis and then immidiately call the function by putting a subsequent pair of parenthesis and pass argument inside it.

Once we have prepared the IIFE and called it , post that we can never use it again. because IIFE gets wiped off from the memory once the execution is done.

IIfe can be vary useful to avoid naming conflicts because they dont conflict with those variables who are in outer scopes.

IIFE can be useful for some temporary logic well.

