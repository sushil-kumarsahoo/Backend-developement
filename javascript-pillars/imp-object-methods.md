
All the keys inside an object are always unique, we cannot have duplicate keys in an object.

# Object.keys(objectname)
if we want that, we need to fetch all the keys of our object.then use the inbuilt Object.keys method.
This method takes one argument which is the object whose keys are expected to fetched.

- Object.keys(product)

it returns an array of strings where each string represents unique key.
- ['name','company','price','warenty']

# Object.values(objectname)
if we want that, we need to fetch all the values of our object and it is not unique then use the inbuilt method Object.values method.

- Object.values(product)


it returns an array of strings where each string represents values.
- ['sushil','Apple','10000','2 year']

# Object.entries(objectname)
fetchs the key value pair and return array of arrays of key value

# Object.keys().length; 
- gives the no of key value pair

# mutability and immutability
The mechanism of being able to update / modify a variables value is called as mutability. If we can modify a variables value then it is mutable.

# immutable
We can use const based initialization for our variables to make them immutable.If we have a variable initialize by const then we will not be able to modify/update/reassign a value to the same variable.

const z; // error
const z = undefined;

# why do we need immutability ?
- we have a DB connection, there are vary less cases where we want to update the configuration of DB connection.

lets you have some secret keys dont want any peice of code to able to manully change them once they are initialized


# why is it tricky to handle immutability in objects ?

if we have a const based initialisation for objects then it doesnt make the object fully immutable.

 - const mainly stops reassignment of variables. it will stop when we try to reassign absolutely new object to our variable.

 const obj = {x:10, y:20};
 obj.x = 99; // allowed to update value of key
 obj.z = 98; //addition of more key value pair allowed

 obj = {a : 10}; // this is not allowed syntax error

Whenever we make an object, the variable bucket stays in the stack memory, but object is created in the heap memory of the process and the reference of the object is stored in the variable bucket.

if we try to reassign a new object, then we changing the refrence thats not allowed by const.

so technically with const objects are not fully immutable.

## Can we make objects fully immutable ??
So there are two important methods, Object.seal and Object.freeze using which we can achieve immutability in objects.

# Object.seal()
This method takes one argument, i.e the object we want to make immutable.This method help us to make sure that we are not able to add new key value pairs, or delete an existing key value pair.
but it will allow update of existing key value pair.

const product = {name: "Iphone 14 pro", price:100000}
Object.seal(product);

product.company = "apple"; // new addition not allowed
console.log(product); // it will print {name: "Iphone 14 pro", price:100000}

delete product.name; // false
console.log(product); // it will print {name: "Iphone 14 pro", price:100000}

product.name = "samsung s22"
console.log(product); // this will update the key value pair {name: "samsung s22", price:100000}

# Object.freeze()
- this provides highest level of immutability,it creates a frozen object
This method takes one argument, i.e the object we want to make immutable.This method help us to make sure that we are not able to add new key value pairs, or delete an existing key value pair.it will not allow update of existing key value pair.

const product = {name: "Iphone 14 pro", price:100000}
Object.seal(product);

product.company = "apple"; // new addition not allowed
console.log(product); // it will print {name: "Iphone 14 pro", price:100000}

delete product.name; // false
console.log(product); // it will print {name: "Iphone 14 pro", price:100000}

product.name = "samsung s22"
console.log(product); // this will print {name: "Iphone 14 pro", price:100000}

# Object.isFrozen(product) // true or false

# Object.isSealed(product) // true or false

thses methods will help us to check if the objects are manually sealed and frozen or not?

if an object is frozen then it return true for both isFrozen and isSealed 
if an object is sealed then it only return true for only isSealed and false for isFrozen

# Object.preventExtension(product)
this method help us to achieve half of seal method . we cannot add new key value pair but we can delete and update the key value pair

# Object.defineProperty()
This function is very powerful as it gives us granular control on make anyu particular set or set of key value pairs as writable or configurable. This takes first argument as objecty and second argumnet as key and third argument is a new object which has configurable and writeable booleans.

const x = {a:10};

Object.defineProperty(x,'a',{writable : false}); //This statement will make specific key nonupdatable

x.a = 99;
console.log(x); // a:10

Object.defineProperty(x,'a',{configurable:false}) //This statement will make specific key nondeletable

Object.defineProperty(x,'a',{writable : false},{configurable:false});
This statement will make specific key nonupdatable and  nondeletable

# Can we make our own Object.seal?
yes, we can combine Object.preventExtension and Object.defineProperty to make our own custom seal method.to make our own freeze method we can go to each key of the object and make it non deletable

function customSeal(obj){
    let keys = Object.keys(obj);
    for(let i=0;i<keys.length();i++){
        Object.defineProperty(obj, keys[i], {configurable : false}); // this stops deletion of key value pair
    }
    Object.preventExtensions(obj); // this stops addition of new key value pair 
}

# Can we make our own Object.freeze?
yes, we can combine Object.preventExtension and Object.defineProperty to make our own custom freeze method. to make our own freeze method we can go to each key of the object and make it non deletable and not updatable

function customFreeze(obj){
    let keys = Object.keys(obj);
    for(let i=0;i<keys.length();i++){
        Object.defineProperty(obj, keys[i], {configurable : false},{writable:false});  // this stops deletion and updation of key value pair
    }
    Object.preventExtensions(obj); // this stops addition of new key value pair 
}