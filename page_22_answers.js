/*Question 1 - Biggie Size
Given an array, write a function that changes all
positive numbers in the array to “big”. Example:
makeItBig([-1,3,5,-5]) returns that same
array, changed to [-1,"big","big",-5].
*/
function makeItBig(arr){

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    } return arr;
}
makeItBig([-1,3,5,-5]); //input array

/*Question 2 - Print Low, Return High
Create a function that takes array of numbers.
The function should print the lowest value in the
array, and return the highest value in the array.
*/
function lowHigh(arr){

    var max = 0;
    var min = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }if (arr[i]< arr.length){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}   
lowHigh([4,6,7,10,3,7,1]); //input array

/*Question 3 - Print One, Return Another
Build a function that takes array of numbers. The
function should print second-to-last value in the
array, and return first odd value in the array.
*/
function printReturn(arr){

    var odd = 0;
    var last = arr[arr.length -2];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            odd = arr[i];
            console.log(last);            
            return odd;
        }
    }
}
printReturn([3,6,1,8,9]); //input array

/*Question 4 - Double Vision
Given array, create a function to return a new
array where each value in the original has been
doubled. Calling double([1,2,3]) should
return [2,4,6] without changing original.
*/
function double(arr){

    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i]*2);
    }
    return newarr; 
}
double([1,2,3]); //input array

/*Question 5 - Count Positives
Given array of numbers, create function to
replace last value with number of positive values.
Example, countPositives([-1,1,1,1])
changes array to [-1,1,1,3] and returns it.
*/
function countPositive(arr){

    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>0){
            count++;
        }if (i == arr.length-1){
            arr[arr.length-1] = count;
        }
    }
    console.log("Number of positive values =",count);       
    return arr;
}
countPositive([-1,1,1,1]);

/*Question 6 - Evens and Odds *Needed Help with this one*
Create a function that accepts an array. Every
time that array has three odd values in a row,
print "That’s odd!" Every time the array has
three evens in a row, print "Even more so!"
*/
function evenOdds(arr){

    for(var i = 0; i < arr.length-2; i++){
        if(arr[i] % 2 ==0 && arr[i+1] %2 ==0 && arr[i+2] % 2 ==0){ 
            console.log("Even more so!");
        }
        if(arr[i] %2 !=0 && arr[i+1] %2 !=0 && arr[i+2] %2 !=0){
           console.log("That's odd!");
        }
    }  
}       
evenOdds([1,1,1,2,2,2,1,1,1,3,4]);

/*Question 7 - Increment the Seconds
Given arr, add 1 to odd elements ([1], [3],
etc.), console.log all values and return arr.
*/
function incrementTheSeconds(arr){

    var odd = 1;
    for(var i =0; i <arr.length; i++){
            console.log(i);
        if(arr[i] % 2 !=0){
            arr[i] = odd;
        }
    } 
    return arr;
}
incrementTheSeconds([2,5,4,7,6,9]);

/*Question 8 - Previous Lengths
You are passed an array containing strings.
Working within that same array, replace each
string with a number – the length of the string at
previous array index – and return the array.
*/
function previousLength(arr){

    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].length;
    }
    return arr;
}
previousLength(["apple","tree","leaves"]);

/*Question 9 - Add Seven to Most
Build function that accepts array. Return a new
array with all values except first, adding 7 to
each. Do not alter the original array.
*/
    function sevenToMost(arr){

        var newarr = [];
        for(var i=0;i<arr.length;i++){
            newarr.push(arr[i]+7);
        }
        newarr.shift();
        return newarr;
    }
    sevenToMost([1,3,2,5,6]);

    /*Question 10 - Reverse Array
    Given array, write a function to reverse values,
    in-place. Example: reverse([3,1,6,4,2])
    returns same array, containing [2,4,6,1,3].
    */
    function reverseArray(){

        var arr = [3,1,6,4,2]; 
        for(var i = 0, x = arr.length -1; i <x; i++, x--) {
            var temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
          }
        return arr;
    }
    reverseArray();
    
    /*Question 11 - Outlook: Negative
    Given an array, create and return a new one
    containing all the values of the provided array,
    made negative (not simply multiplied by -1).
    Given [1,-3,5], return [-1,-3,-5].
    */
    function outlookNegative(){

        var arr = [1,-3,5,8,-5,6,-10]
        var newarr = [];
        for(var i =0; i<arr.length;i++){
            if(arr[i]<0){
                newarr.push(arr[i]);
            }
            if(arr[i]>0){
                newarr.push(arr[i]*=-1);
            }
        } return newarr;
    }
    outlookNegative();

    /*Question 12 - Always Hungry
    Create a function that accepts an array, and
    prints "yummy" each time one of the values is
    equal to "food". If no array elements are
    "food", then print "I'm hungry" once.
    */
    function alwaysHungry(arr){

        var count = 0;
        for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
        count++;
        console.log("yummy")
        } 
        else if (arr[i] ==arr[arr.length-1] && count == 0){
        console.log("I'm hungry");
            }
        }
    }
    alwaysHungry(["food"]);

    /*Question 13 - Swap Toward the Center *Needed Help with this one*
    Given array, swap first and last, third and third-tolast,
    etc. Input[true,42,"Ada",2,"pizza"]
    becomes ["pizza",42,"Ada",2,true].
    Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
    */
    function swapCenter(arr) {

        for(var i = 0; i < Math.floor(arr.length/2); i++) {
        if (i % 2 == 0) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
            }
        }
        return arr;
    }
    swapCenter([true,42,"Ada",2, "pizza"]);

    /*Question 14 - Scale the Array
    Given array arr and number num, multiply each
    arr value by num, and return the changed arr.
    */
    function scaleArray(arr,num){

        for(var i =0; i <arr.length; i++){
            arr[i]*= num;
        }
        return arr;
    }
    scaleArray([5,7,3,2], 4);