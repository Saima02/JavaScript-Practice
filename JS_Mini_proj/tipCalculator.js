// 6. Tip Calculator
        function tipCalculator(billAmount, tipPercentage){
            let tip = (billAmount * tipPercentage) / 100;
            let totalBill = billAmount + tip;
            return [tip, totalBill];
        }
        let bill = Number(prompt("Enter Bill amount"));
        let tipPercentage = 10;

        let result = tipCalculator(bill, tipPercentage);
        let tip = result[0];
        let total = result[1];
        console.log("Tip = Rs " + tip);
        console.log("Total Bill = Rs " + total);