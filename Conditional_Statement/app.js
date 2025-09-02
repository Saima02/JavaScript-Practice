// Leap Year checker
    let year = 1904;
    if (year % 4 === 0){
        if (year % 100 === 0) {
            if(year % 400 === 0){
                console.log("Leap year");   
            } else{
                console.log("Not a leap year");
            }
        } else{
            console.log("Leap year");      
        }
    } else{
        console.log(" Not a Leap year");    
    }


//simple ATM system
    let pin = Number(prompt("Enter pin"));
    let correct_pin = 123;
    let balance = 5000;

    if (pin === correct_pin){
        let withdraw_amount = Number(prompt("Enter withdrwal amount"));

        if (withdraw_amount > balance){
            console.log("Insufficent balance");
        }else {
            console.log("withdraw sucessful");  
            balance -= withdraw_amount;
            console.log("Remaining balance = " + balance);    
        }
    } else {
        console.log("wrong pin");    
    }

//Numbers in word

let num1 = Number(prompt("Enter Number between 0 - 9"));
switch (num1) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    case 8:
        console.log("eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default : 
        console.log("Inavalid input!! Please Select between 0 - 9");
        
}