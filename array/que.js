let fruits = ["apple", "banana", "orange"];
console.log("Initial fruits:", fruits);

// Goal: Add "mango" at the end
fruits.push("mango");
console.log("After push:", fruits);

// Goal: Remove the first fruit
fruits.shift();
console.log("After shift:", fruits);

// Goal: Replace "banana" with "grape"
// Hint: Use splice
fruits.splice(0, 1, "grape");  // ❌ Bug: fill in the ??? parts

console.log("Final fruits:", fruits);


let names = ["alice", "bob", "charlie"];
for(let i = 0; i < names.length; i++) {
    names[i] = names[i].toUpperCase();
}
console.log(names);

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


let game = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
console.log(game);
game[0][1] = "0";
console.log(game);

for ( let i = 0; i <= 10; i++){
    console.log(i);
}

