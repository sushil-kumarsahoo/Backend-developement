# Classes
Classes are blueprint on a set of real life entities.

# Objects
Using classes the final entity that we will develope is called objects.There is a keyword in JS `new` which can help us to create an object out of a class.

```js
let iphone = new Product();
```

# How new works ?
Every time we call new, it does the following 4 step procedure -
1. it creates a brand new plain & absolutely empty object.
2. it calls the constructor of the class and passes the newly created object(not as a parameter) inside a keyword called as `this`. So constructor automatically has access to this keyword and when we call new, then the this keyword has access to the plain object created in step 1 and constructor now can we use the this keyword inside it. And then whatever is logic of constructor it is executed.
3. in step 3, new triggers everything need to be done for prototypes to work.
4. Now, if from a constructor an object is returned then this manually returned object is stored in the called variable, otherwise in any other case i.e either we dont return anything or return something apart from object, constructor doesnt care about it and returns the value inside this keyword.

```js
class Product {
    name;
    price;
    category;
    constructor(){
    console.log("constructor called");
    return {x:10};
    //return [10]; //object
    //return function fun(){} //object 
}
  addToCart() {
    console.log("Product added to cart");
  }
}
let iphone = new product();
iphone

```
o/p:{x: 10}

```js
class Product {
    name;
    price;
    category;
    constructor(){
    console.log("constructor called");
    return 10;
}
  addToCart() {
    console.log("Product added to cart");
  }
}
let iphone = new product();
iphone

```
o/p- constructor called
Product {
  name: undefined,
  price: undefined

# constructor : a very special member function
So whenever we create an object using classes, the constructor is first method that is automatically called by JS. We can change the implementation of the constructor by writing one of our own.

```js

class Product {
    // name,
    // price,
    // category,
    // description,
    // rating,
    constructor(productName,productPrice,productcategory,productDescription,productRating){
    this.name = productName;
    this.price = productPrice;
    this.category = productcategory;
    this.description = productDescription;
    this.rating = productRating;
}
const iphone = new Product('iphone','125000','mobile','phone','4.5');
console.log(iphone);
```

o/p: Product {name: 'iphone', price: '125000', category: 'mobile', description: 'phone', rating: '4.5'}

# this keyword of JS
- `this` in JS works very differently than other languages.'
- `this` as a keyword is available to be accessed in any function or even outside any function, and in classes as well.
- If we can use `this` keyword anywhere, then whats the value stored inside `this`?

In most of the cases this refers to the call site.
call site can be an object, or a position or may be even new keyword. it refers to the entity which is calling this keyword.

```js
let obj = {
    x:10,
    y:20,
    fn: function(){
        console.log(this.x,this.y);
    }
}
obj.fn(); //obj is call site
```

```js
let obj = {
    x:10,
    y:20,
    z:{
        x:99,
        fn: function(){
        console.log(this.x,this.y);
    }
    }
}
obj.z.fn(); // 99 undefined // here z is callsite
```

- it has an exception, this keyword will not refer to the callsite if used inside an arrow function.

```js
let obj = {
    x:10,
    y:20,
    fn: () => {
        console.log(this.x,this.y);
    }
}
obj.fn(); // undefined undefiend
```

- Incase of arrow function, this is resolved using lexical scoping.

```js
let obj = {
    x:10,
    y:20,
    fn: function(){ // it is a normal function so it has `this`
        const f = () => {
            console.log(this.x,this.y);
        }
        f()
    }
}

obj.fn();
```
o/p: 10 20

in this code, `this` is present inside the srrow function, hence we will resolve it lexically.

That means, when we make a new object using the new keyword, then new keyword creates a plain object and this plain object is the call site for the constructor hence, `this` keyword refers to the plain pbject altogether.

```js
let obj = {
    x:1,
    y:2,
    fn: function(){
        let x = 3;
        let y = 4;
        const printVariables = () => {
            console.log(this.x,this.y)
            console.log(x,y)
        }
        printVariables()
    }
}
obj.fn()
 // 1 2 3 4
```