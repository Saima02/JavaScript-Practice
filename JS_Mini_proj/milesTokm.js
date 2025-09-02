// 3. Miles to Kilometer Converter
        function milesTokm(miles){
            return miles * 1.60934;
        }
        // let distance = prompt("Enter Distance in miles");
        let distance = 5;
        distance = Number(distance);
        let km = milesTokm(distance);
        console.log(distance + " miles = " + km + " km");  