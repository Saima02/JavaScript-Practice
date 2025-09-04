for (let i = 1; i <= 8; i++){
    console.log("Steps ", i); 
}

for (let index = 1; index <= 10; index++){
    console.log("3 X " + index + " = " + (3 * index));
}

for (let j = 1; j <=20; j++){
    console.log("2 X " + j + " = " + (2 * j));    
}

let step = Number(prompt("Enter step"));
if (step > 10){
    console.log("Invalid input");
} else {
    while(step <= 10){
    console.log("Step " + step);
    step += 1;
}
}

for (let a = 1; a <= 20; a++){
    if ( a % 2 == 0){
        console.log(a);
    }
}

let num = Number(prompt("Enter number"));
while (num >= 0 ) {
    console.log("Square of " + num + " is " + (num * num));
    num--;
}

let steps = 0;
do { 
    console.log("steps" , steps);
    steps += 1;
} while (steps < 5) ;
 