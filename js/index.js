// Iteration 1: Names and Input

let hacker1 = "pepito";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "angelito";
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let driverInUpperCase = "";
let driverCharAt = "";

for (let i = 0; i < hacker1.length; i++) {
  driverInUpperCase += hacker1[i].toUpperCase();
  driverCharAt += driverInUpperCase.charAt(i) + " ";
}
console.log(driverInUpperCase);
console.log(driverCharAt);

let navReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navReversed += hacker2[i];
}

console.log(navReversed);
