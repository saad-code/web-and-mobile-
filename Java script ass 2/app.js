//Chap 21-2
//task1
var firstn = prompt("Enter first Name?", );
var lastn = prompt("Enter last Name?", );
var fullname;
fullname = firstn + lastn;
alert("Welcome " +fullname);

//task2
var mobn = prompt("Enter Fav Mobile Name?", );
var leng= mobn.length;
document.write("The length of string is:" +leng + "<br>");

//task3
var text="pakistani";
var firstChar = text.indexOf("n");
document.write("String:" +text + "<br>");
document.write("Index of n:" +firstChar + "<br>");
 
//task4
var text="Hello World";
var firstChar = text.lastIndexOf("l");
document.write("String:" +text + "<br>");
document.write("Index of l:" +firstChar + "<br>");
 
//task5
var text="pakistani";
var firstChar= text.charAt(3);
document.write("String:" +text + "<br>");
document.write("Char at  index 3:" +firstChar + "<br>");

//task6
var text="pakistani";
var firstChar= text.concat(3);
document.write("String:" +text + "<br>");
document.write("Char at  index 3:" +firstChar + "<br>");

//task7
var text="Hyderabad";
var newText = text.replace("Hyder", "Islam");
document.write("City:" +text + "<br>");
document.write("After repalcement:" +newText + "<br>");

//task8
var text="Ali and Sami are best friends. They play cricket and football together";
var newText = text.replace(/and/g, "&");
document.write("Text:" +text + "<br>");
document.write("After repalcement:" +newText + "<br>");

//task9
var str="472";
var intg=  parseInt(str);
document.write("String:" +str + "<br>");
document.write("Number:" +intg + "<br>");

//task10
var firstn = prompt("Enter a word?", );
var upper = firstn.toUpperCase();
document.write("Word:" +firstn + "<br>");
document.write("In Capital :" +upper + "<br>");

//task11
var firstn = prompt("Enter a word?", );
var firstChar = firstn.slice(0, 1);
var otherChars = firstn.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var capped = firstChar + otherChars;

document.write("Word:" +firstn + "<br>");
document.write("In Title case :" +capped + "<br>");

//task12
var num = 35.36 ;
var nub= parseInt(num);
var int = num.toString();
document.write("Number:" +nub + "<br>");
document.write("Integer:" +int + "<br>");

//task13
var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

//task16
var str = 'University of Karachi';
var ar = str.split("");
document.write( ar + "<br>");

//task17
var str = "Pakistan"; 
var res = str.charAt(str.length-1);
document.write("String:" +str + "<br>");
document.write("Last char:" +res + "<br>");
 
//task18
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
document.write(count("The quick brown fox jumps over the lazy dog", 'the'));
document.write("<br>");



//Chap 26-30
//task1
var num = +prompt("Enter number?", );
var rnum = Math.round(num);
var cnum = Math.ceil(num);
var fnum = Math.floor(num);
document.write("Number:" +num + "<br>");
document.write("Round off number:" +rnum + "<br>");
document.write("Ceiling num:" +cnum + "<br>");
document.write("floor num:" +fnum + "<br>");

//task2
var num = +prompt("Enter negative number?", );
var rnum = Math.round(num);
var cnum = Math.ceil(num);
var fnum = Math.floor(num);
document.write("Number:" +num + "<br>");
document.write("Round off number:" +rnum + "<br>");
document.write("Ceiling num:" +cnum + "<br>");
document.write("floor num:" +fnum + "<br>");

//task3
var num = +prompt("Enter number?", );
var rnum = Math.abs(num);
document.write("Number:" +num + "<br>");
document.write("Absolute number:" +rnum + "<br>");

//task4
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write('You rolled a ' + diceRoll + "<br>");

//task5
var diceRoll = Math.floor( Math.random() * 2 ) +1;
if(diceRoll===1)
document.write('Random coin value ' + diceRoll + " Tails" + "<br>");
else
document.write('Random coin value ' + diceRoll + " Heads" + "<br>");

//task6
var diceRoll = Math.floor( Math.random() * 100 ) +1;
document.write('Random number ' + diceRoll + "<br>");

//task7
var weight = prompt("Enter your weight:");
document.write('Your weight is  ' + weight + "<br>");

//task8
var diceRoll = Math.floor( Math.random() * 10 ) +1;
var num = +prompt("Enter number between 1-10 ?", );
if(diceRoll===num)
alert("Congratulations!!");
else
alert("Try again!");



//Chap 31-34
//task1
var d = new Date();

document.write( d + "<br>");
//task2

var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var d = new Date();
alert("The current month is " + monthNames[d.getMonth()] );
    
//task3
var today = new Date();
if(today.getDay() == 6 ) alert('Today is Sat' );
else if(today.getDay() == 0 ) alert('Today is Sunday' );
else if(today.getDay() == 1 ) alert('Today is Monday' );
else if(today.getDay() == 2 ) alert('Today is Tuesday'  );
else if(today.getDay() == 3 ) alert('Today is Wednesday');
else if(today.getDay() == 4 ) alert('Today is Thursday');
else if(today.getDay() == 5 ) alert('Today is Friday' );

//task4
var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0) alert("Its Fun day! ");
    
//task5
var today = new Date();
if(today.getDay() > 16 ) 
alert('First fifteen days of the month' );
else
alert("Last days of the month ");

//task6
var today = new Date();
time= today.getTime;
document.write("Current Day :" +today + "<br>");
document.write("Elapsed milisecond since Jan1 1970 :" +time + "<br>");

//Task7
var today = new Date();
if(today.getHours() ==0 || today.getHours()< 12 ) 
alert('Its Am' );
else
alert("Its Pm ");var today = new Date();

//task8
var laterdate = new Date(2020, 11, 31, 10, 33, 30, 0);
document.write(laterdate +"<br>");

//task9
const startDate = '2020-6-20';
const endDate   = '2020-4-25';
const timeDiff  = (new Date(startDate)) - (new Date(endDate));
const days      = timeDiff / (1000 * 60 * 60 * 24);
document.write(days + " days have passed since 1st ramazan 2020" +"<br>" );

//task10
var d = new Date();
document.write( "Current date :" +d +"<br>");
var bd = d.getHours();
 d.setHours(bd-1);
document.write( "Curren date 1 hour before :" +d +"<br>");

//task11
var today = new Date();
var doomsday = new Date("January 1, 2015");
var msToday = today.getSeconds();
var msDoomsday = doomsday.getSeconds();
var msDiff =  msToday-msDoomsday;
document.write(msDiff +"seconds have passed since 2015" + "<br>");

//task12
var d = new Date();
document.write( "Current date :" + d +"<br>");
var bd = d.getFullYear();
 d.setFullYear(bd-100);
document.write( "100 years back it was :"  + d +"<br>");

//task13
var d = new Date();
var bd = d.getFullYear;
var age = +prompt("Enter your age?", );
var year= bd-age;
document.write("Your bith year is :" + year + "<br>");

//task14
document.write("Customer name: Ertugral" + "<br>");
var d = new Date();
document.write("Month: February" + "<br>");
var nunit = 410;
var cunits = 16;
document.write("Numer of units: " + nunits + "<br>");
document.write("charges of units: " + cunits + "<br>");
var net = 410*16;
var gross= net + 350;
document.write("Net amount payable with i due date: " + net + "<br>");
document.write("Late payment surcharge: 350 "  + "<br>");
document.write("Gross amount payable after due date: " + gross + "<br>");


//Chap 35-38
//task1
function tellTime() {
    var d = new Date();
    document.write( d + "<br>");


}
tellTime();

//task2
function name(){
    var firstn = prompt("Enter first Name?", );
var lastn = prompt("Enter last Name?", );
var fullname;
fullname = firstn + lastn;
alert("Welcome " +fullname);
}
name();

//task3
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));

  //task4
  function calc(num1,num2,oper){
      num1 = +prompt("Enter number 1:");
      num2 = +prompt("Enter number 2:");
      oper= prompt("Enter operator")
      if(oper== '+'){
           var ans= num1+num2;
           return ans;
      }
      else if (oper=== '-'){
        var ans= num1-num2;
        return ans;
   }
   else if (oper=== '*'){
    var ans= num1*num2;
    return ans;
}
  else{
      ans =num1/num2;
      return ans;
  }

  }
  calc(ans);

  //task5
  function sumOfSquares(num) {
    
        var i = num*num;
}
     document.write("The  squares for number:" +i) ;

var num = parseInt(prompt("Enter a number:"));
sumOfSquares(num);

//task6
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);

//task7
var submit = parseInt(prompt("Enter a starting number:"));
var input = parseInt(prompt("Enter a last number:"));

function sum() {
    var FirstNumber = submit;
    var SecondNumber = input;

    var result = 0;

    for (var i = FirstNumber; i <= SecondNumber; i++) {
      result += i;  
    }

    alert(result);
}

///task8
function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  
  console.log(pythagorean(4, 3));

//task9
function rectangle() {
    'use strict';
    var area;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    total = width * height;
    document.getElementById('area').value = total;
    return false;
    }   

    //task10
    function check_Palindrome(str_entry){
           var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
            var ccount = 0;
            if(cstr==="") {
                console.log("Nothing found!");
                return false;
            }
            if ((cstr.length) % 2 === 0) {
                ccount = (cstr.length) / 2;
            } else {
                if (cstr.length === 1) {
                    console.log("Entry is a palindrome.");
                    return true;
                } else {
                    ccount = (cstr.length - 1) / 2;
                }
            }
            for (var x = 0; x < ccount; x++) {
                if (cstr[x] != cstr.slice(-1-x)[0]) {
                    console.log("Entry is not a palindrome.");
                    return false;
                }
            }
            console.log("The entry is a palindrome.");
            return true;
        }
        check_Palindrome('madam');
        check_Palindrome('nurses run');
        check_Palindrome('fox');

//task11
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//task12
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

//task13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));





