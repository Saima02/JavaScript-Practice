// 2. Kilometer to Miles Converter
        function kmTomiles(km){
            return km * 0.621371;
        }
        let distances = prompt("Enter Distance in km");
        distances = Number(distances);
        let miles = kmTomiles(distances);
        console.log(distances + "km =" + miles + "mi");