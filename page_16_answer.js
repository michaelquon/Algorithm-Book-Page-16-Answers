/*  Question 1 - Setting and Swapping
    Set myNumber to 42. Set myName to your name.
    Now swap myNumber into myName & vice versa.
*/
function swapping(){

    var myNumber = 42;
    var myName = 'Mike';
    var temp = myNumber;
        myNumber = myName;
        myName = temp;
            console.log("My Number is", myNumber);
            console.log("My Name is", myName);
}
swapping();

/*Question 2 - Print -52 to 1066
Print integers from -52 to 1066 using a FOR loop.
*/
function printIntegers(){

    var sum = 0;
        for(var i = -52; i <= 1066; i++){
            sum=i;
            console.log(sum);
        }
}
printIntegers()

/*Question 3 - Don't Worry, Be Happy
Create beCheerful(). Within it, console.log
string "good morning!" Call it 98 times.
*/
function beCheerful(){

    var gm = 0;
    var count = 0;
    for(var i = 1; i<=98; i++){
    if(gm<=i){
        count++;
            console.log("good morning!", count);
        }
    }
}
beCheerful();

/*Question 4 - Multiples of Three - but Not All
Using FOR, print multiples of 3 from -300 to 0.
Skip -3 and -6.
*/
function multiples(){

    var sum = 0;
    for(var i = -300; i <=0; i++){
        if(i %3 ==0){
            sum=i;
            console.log(sum);
        }
    }
}
multiples();

/*Question 5 - Printing Integers with While
Print integers from 2000 to 5280, using a WHILE.
*/
function intWhile(){

    var total = 1999;
    while(total<5280){
        total++;
            console.log(total);
    }
}
intWhile();

/*Question 6 - You Say It’s Your Birthday
If 2 given numbers represent your birth month
and day in either order, log "How did you
know?", else log "Just another day...."
*/
function birthDay(month,day){

    var birthDay ="";
    if((month == 11 || month == 21) && (day == 21 || day == 11)){
        console.log("How did you know?");
    }else{
        console.log("Just another day....");
    }
}
birthDay(11,21);

/*Question 7 - Leap Year
Write a function that determines whether a given
year is a leap year. If a year is divisible by four,
it is a leap year, unless it is divisible by 100.
However, if it is divisible by 400, then it is.
*/
function leapYear(year){
    
    if(year % 4 ==0 && (year % 100 != 0) || (year % 400 == 0)){
        console.log("It is a Leap Year")
        }else{
            console.log("it is not a Leap Year");
        }
    }
leapYear(2018);

/*Question 8 - Print and Count
Print all integer multiples of 5, from 512 to 4096.
Afterward, also log how many there were.
*/
function printCount(){

    var count = 0;
    for(var i = 512; i <= 4096; i++){
        if(i % 5 == 0){
        count++;
            console.log('sum', i);
        }
        
    }
    console.log('total count', count);
}
printCount();

/*Question 9 - Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE.
*/
function multiplesOfSisum(){

    var sum = 0;
    while(sum <= 60000){
        if (sum % 6 == 0){
            console.log(sum);
        }
        sum++;
    }
}
multiplesOfSisum();

/*Question 10 - Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print
"Coding" instead. If by 10, also print " Dojo".
*/
function dojoWay(){

    for(var i = 0; i <=100; i++){
        if(i % 5 == 0){
                console.log("Coding");
        }if(i % 10 == 0){
                console.log("Dojo");
        }
    }
}
dojoWay();

/*Question 11 - What Do You Know?
Your function will be given an input parameter
incoming. Please console.log this value.
*/
function whatDo(incoming){
    
    console.log(incoming);
}
whatDo("incoming");

/*Question 12 - Whoa, That Sucker's Huge...
Add odd integers from -300,000 to 300,000, and
console.log the final sum. Is there a shortcut?
*/
function whoa(){

    var sum = 0;
    for(var i = -300000; i <= 300000; i++){
        if(i % 2 !== 0){
            sum+=i;
        }
    }   
    console.log(sum);
}
whoa();

/*Question 13 - Countdown by Fours
Log positive numbers starting at 2016, counting
down by fours (exclude 0), without a FOR loop.
*/
function countDown(){

    var count = 2016;
    while(count > 0){
        console.log(count);
    count=count-4;
    } 
}
countDown();

/*Question 14 - Flexible Countdown
Based on earlier “Countdown by Fours”, given
lowNum, highNum, mult, print multiples of mult
from highNum down to lowNum, using a FOR.
For (2,9,3), print 9 6 3 (on successive lines).
*/
function flexibleCount(lowNum, highNum, mult){

    for(var i=highNum; i > lowNum; i-=mult){
        console.log(i);
    }
   }
    flexibleCount(2,9,3);

 /*Question 15 - The Final Countdown
 This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
print the multiples of param1, starting at param2 and extending to param3. One exception: if a
multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
*/
function finalCount(param1, param2, param3, param4){

    while(param2 < param3){
        if(param2 % param4 !=0){
            if(param2 % param1 ===0){
                console.log(param2);
            }
        }
        param2++;
    }
 }
 finalCount(3,5,17,9);