// 1. Celsius to Fahrenheit
       function cfconverter(){
            return (celsius * 9/5) + 32;
        }
        let celsius = prompt("Enter Temperature in C");
        let fahrenheit = cfconverter(celsius);
        console.log(celsius + "°C =" + fahrenheit + "°F"); 
