// Page 22 - Question 1 - Biggie Size

function makeItBig(){

    var arr = [-1,3,5,-5];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    } return arr;
}
makeItBig();

//Page 22 - Question 2 - Print Low, Return High

function lowHigh(){

    var arr = [];
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
lowHigh();

//Page 22 - Question 3 - Print One, Return Another

function printReturn(arr){

    var arr = [];
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
printReturn();

//Page 22 - Question 4 - Double Vision

function double(){

    var arr = [1,2,3];
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i]+arr[i]);
    }
    return newarr; 
}
double();

//Page 22 - Question 5 - Count Positives

function countPositive(){

    var arr = [];
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>0){
            count++;
        }if (i == arr.length-1){
            arr[arr.length-1] = count;
        }
    }       
    return arr;
}
countPositive();

//Page 22 - Question 6 - Evens and Odds *Needed Help with this one*

function evenOdds(){
    var arr = [1,1,1,2,2,2,1,1,1,3,4];
    for(var i = 0; i < arr.length-2; i++){
        if(arr[i] % 2 ==0 && arr[i+1] %2 ==0 && arr[i+2] % 2 ==0){ 
            console.log("Even more so!");
        }
        if(arr[i] %2 !=0 && arr[i+1] %2 !=0 && arr[i+2] %2 !=0){
           console.log("That's odd!");
        }
    }  
}       
evenOdds();

//Page 22 - Question 7 - Increment the Seconds

function incrementTheSeconds(){

    var arr = [2,5,4,7,6,9];
    var odd = 1;
    for(var i =0; i <arr.length; i++){
            console.log(i);
        if(arr[i] % 2 !=0){
            arr[i] = odd;
        }
    } 
    return arr;
}
incrementTheSeconds();

//Page 22 - Question 8 - Previous Lengths

function previousLength(){

    var arr = ["apple","tree","leaves"];
    for(var i = 0; i < arr.length; i++){
        arr[i] = 1;
    }
    return arr;
}
previousLength();

//Page 22 - Question 9 - Add Seven to Most

    function sevenToMost(){

        var arr = [1,3,2,5,6];
        var newarr = [];
        for(var i=0;i<arr.length;i++){
            newarr.push(arr[i]+7);

        }
        newarr.shift();
        return newarr;
    }
    sevenToMost();

    //Page 22 - Question 10 - Reverse Array

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
    
    //Page 22 - Question 11 - Outlook: Negative

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

    //Page 22 - Question 12 - Always Hungry

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

    //Page 22 - Question 13 - Swap Toward the Center *Needed Help with this one*

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

    //Page 22 - Question 14 - Scale the Array

    function scaleArray(arr,num){

        for(var i =0; i <arr.length; i++){
            arr[i]*= num;
        }
        return arr;
    }
    scaleArray([5,7,3,2], 4);