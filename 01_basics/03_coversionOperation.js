let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber);  // NaN => Not a Number 


let object = null

console.log(typeof object);
console.log(typeof (object));

let valueInNumber2 = Number(object)

console.log(typeof (valueInNumber2));
console.log(valueInNumber2);  // output => 0




let noValue = undefined

console.log(typeof noValue);

let valueInNumber3 = Number(noValue)

console.log(typeof (valueInNumber3));
console.log(valueInNumber3); // output => undefined



let t_f = true

console.log(typeof t_f);

let valueInNumber4 = Number(t_f)

console.log(typeof (valueInNumber4));
console.log(valueInNumber4);  // output => for true = 1 / False =  0


// "33" => 33
// "33abc" => NaN
// true =>  1 , false => 0


console.log("Boolean Conversion")

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true / 0=> false
// ""  => false
// "Shubh" => true