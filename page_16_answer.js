// Page 16 Question 1 - Setting and Swapping

function swapping(){

    var myNumber = 42;
    var myName = 'Mike';
    var temp = myNumber;
        myNumber = myName;
        myName = temp;
            console.log(myNumber);
            console.log(myName);
}
swapping();

//Page 16 Question 2 - Print -52 to 1066

function printIntegers(){

    var sum = 0;
        for(var i = -52; i <= 1066; i++){
            sum=i;
                console.log(sum);
        }
}
printIntegers()

//Page 16 Question 3 - Don't Worry, Be Happy

function beCheerful(){

    var gm = 0;
    for(var i = 1; i<=98; i++){
        gm = i;
        if(gm<=i){
            console.log("good morning!");
        }
    }
}
beCheerful();

//Page 16 Question 4 - Multiples of Three - but Not All

function multiples(){
    var x = 0;
    for(var i = -300; i <=0; i=i+3){
        x=i;
            console.log(x);
    }
}
multiples();

//Page 16 Question 5 - Printing Integers with While

function intWhile(){

    var total = 1999;
    while(total<5280){
        total++;
            console.log(total);
    }
}
intWhile();

//Page 16 - Question 6 - You Say It’s Your Birthday

function birthDay(month,day){

    var birthDay ="";
    if((month == 11 || month == 21) && (day == 21 || day == 11)){
        console.log("How did you know?");
    }else{
        console.log("Just another day....");
    }
}
birthDay(11,21);

//Page 16 - Question 7 - Leap Year

function leapYear(year){
    
    if(year % 4 ==0 && (year % 100 != 0) || (year % 400 == 0)){
        console.log("It is a Leap Year")
        }else{
            console.log("it is not a Leap Year");
        }
    }
leapYear(2016);

//Page 16 - Question 8 - Print and Count

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

//Page 16 - Question 9 - Multiples of Six

function multiplesOfSix(){
    var x = 0;
    while(x <= 60000){
        if (x % 6 == 0){    
                console.log(x);
        }
            x++;
    }
}
multiplesOfSix();

//Page 16 - Question 10 - Counting, the Dojo Way

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

//Page 16 - Question 11 - What Do You Know?

function whatDo(incoming){
    
    console.log(incoming);
}
whatDo("incoming");

//Page 16 - Question 12 - Whoa, That Sucker's Huge...

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

//Page 16 - Question 13 - Countdown by Fours

function countDown(){

    var count = 2016;
    while(count > 0){
        console.log(count);
        count=count-4;
    } 
}
countDown();

//Page 16 - Question 14 - Flexible Countdown

function flexibleCount(lowNum, highNum, mult){

    for(var i=highNum; i > lowNum; i-=mult){
        console.log(i);
    }
}
flexibleCount();

 //Page 16 - Question 15 - The Final Countdown

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
 finalCount();
