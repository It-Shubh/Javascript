// Primitive 

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non - Primitive)

// Array, Objects, Functions 


const heroes = ["IronMan", "SpiderMan", "Captain America"];

let myObj = {
    name : "Shubh",
    age : 18,
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof myObj );
console.log(typeof myFunction);

console.log(typeof myObj, typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++

// Memory Management  

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "ShubhYT"

let anotherName = "myYoutubename"
anotherName ="Tripathijii"

console.log(myYoutubename);
console.log(anotherName);


// heap memory

console.log("Heap Memory");

let userone = {
    email: "shubh@google.com",
    upi : "user@ygl"
}

let userTwo = userone

userTwo.email = "user@google.com",

console.log(userone.email);
console.log(userTwo.email);
