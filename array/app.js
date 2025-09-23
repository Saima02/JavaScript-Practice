// --- Array push/pop/unshift/shift example ---
let cars = ["omni", "maruti", "toyota"];
console.log("Initial cars:", cars);

cars.push("ferrari"); // add at end
console.log("After push:", cars);

cars.pop(); // remove last
console.log("After pop:", cars);

cars.unshift("ferrari"); // add at start
console.log("After unshift:", cars);

cars.shift(); // remove first
console.log("After shift:", cars);

// --- Followers example ---
let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log("Followers:", followers);
console.log("Blocked:", blocked);

// --- Splice example ---
let months = ["jan", "july", "march", "august"];
months.splice(0, 2, "july", "june"); // replace first two
console.log("Updated months:", months);

// --- String concat example ---
// let color1 = prompt("Enter first color: ");
// let color2 = prompt("Enter second color: ");
// let combined = color1.concat(color2);
// console.log("Combined colors:", combined);
