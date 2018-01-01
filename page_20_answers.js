/*Question 1 - Countdown
Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
*/
function countDown(arrnum){

        var arr = []
        for(var i = arrnum; i >= 0; i--){
          arr.push(i)
        }
        console.log(arr);
        return arr;
      } 
countDown();

/*Question 2 - Print and Return
Your function will receive an array with two numbers. Print the first value, and return the second.
*/
function printRtn(){
        
        var arr = [2,8];
        console.log(arr[0]);
        return arr[1];
}
printRtn();

/*Question 3 - First Plus Length
Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
*/
function firstPlus(){

        var arr = [false,2,4,6];
        return arr[0] += arr.length;
}
firstPlus();

/*Question 4 - Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
*/
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

/*Question 5 - Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array values that are greater
than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
*/
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

/*Question 6 - This Length, That Voice
Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
*/
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

/*Question 7 - Fit the First Value
Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
*/
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

/*Question 8 - Fahrenheit to Celsius
Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed
in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
*/
function fahrenheitToCelsius(fDegrees){
    
    return (fDegrees-32) *5/9
}
fahrenheitToCelsius(85);

/*Question 9 - Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
the equivalent temperature expressed in Fahrenheit degrees.
(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be
complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward
(descending), checking whether it is equal to the corresponding Fahrenheit value.
*/
function celsiusToFahrenheit(cDegrees){

    return (cDegrees *9/5) + 32
}
celsiusToFahrenheit(30);