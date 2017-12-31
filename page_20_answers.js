// Page 20 - Question 1 - Countdown
function countDown(arrnum){

        var arr = []
        for(var i = arrnum; i >= 0; i--){
          arr.push(i)
        }
        console.log(arr);
        return arr;
      } 
countDown();

//Page 20 - Question 2 - Print and Return

function printRtn(){
        
        var arr = [2,8];
        console.log(arr[0]);

        return arr[1];
}
printRtn();

//Page 20 - Question 3 - First Plus Length

function firstPlus(){

        var arr = [false,2,4,6];

        return arr[0] += arr.length;
}
firstPlus();

//Page 20 - Question 4 - Values Greater than Second

function valuesGreat(){

        var arr = [1,3,5,7,9,13];
        var count = 0;
        for(var i =0; i< arr.length; i++){
            if(arr[i]>arr[1]){
                count++
                console.log(arr[i]);
            }
        }
        return count;
}
valuesGreat();

//Page 20 - Question 5 - Values Greater than Second, Generalized

function valueGeneral(arr){

        var arr = [];
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i]>arr[1]){
                count++;
                console.log(arr[i]);
            }
        }
        return count;
    }
valueGeneral();

//Page 20 - Question 6 - This Length, That Voice

function lengthValue(num1,num2){

        if(num1 == num2){
            console.log("Jinx!");
        }else{
            var arr = [];
            for(var i = 0; i < num1; i++){
                arr.push(num2)

            }
        } 
        console.log (arr);
}
lengthValue();

//Page 20 - Question 7 - Fit the First Value

function fitFirst(){

    var arr = [];
        
        if(arr[0] > arr.lenght){
            console.log("Too Big!");
    }else{
        if(arr[0]< arr.length){
            console.log("Too small!");

    }else{
        if(arr[0]== arr.length){
            console.log("Just right!");
             }
         }
     }
}
fitFirst();

//Page 20 - Question 8 - Fahrenheit to Celsius

function fahrenheitToCelsius(fDegrees){

    return (fDegrees-32) *5/9
}
fahrenheitToCelsius(85);

//Page 20 - Question 9 - Celsius to Fahrenheit

function celsiusToFahrenheit(cDegrees){

    return (cDegrees *9/5) + 32
}
celsiusToFahrenheit(30);