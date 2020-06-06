// Chap1 
// Task 1
alert("Welcome to website!");
//Task 2
alert("Error! Please enter a valid password.");
//Task 3
alert("Welcome to JS land....\nHappy Coding!");
// Task 4
alert("Welcome to JS land.");
alert("Welcome to JS land.");
alert("Welcome to JS land.");
alert("Welcome to JS land.");
alert("Welcome to JS land.");
alert("Happy Coding!");


//Chap 2
//Task 1
var username;
//Task 2
var myName="Saad Hassan";
//Task 3
var message="Hello World"
alert(message);
//Task 4
var name="Saad";
var age="20";
var course="Web And Mobile Development";
alert(name);
alert(age);
alert(course);
//Task5
var dis="pizza\npizz\npiz\npi\np";
alert(dis);
//task6
var email="saad.hassan1999.sh@gmail.com"
alert("My email is" + " " + email);
//task7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from "+book);
//task 8
 document.write("Yah! I can write HTML content By Java Script" +"<br>");
//task9
var task9="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(task9);


//Chap 3
//task1
var age="20";
alert("I am " + age + " years old");
//task2
var vis="7";
alert("Yo have visited this site "  + vis + " times");
//task3
var birthyear="1999";
document.write("my birth year is"+birthyear + "<br>" + "Data type of my deaclared variable is numver" + "<br>");
//task4
var visitor="John Doe";
var product="Tshirts";
var quantity="5";
document.write("\n" +visitor + "ordered" +quantity +product + "XYZ clothing store <br>");



//Chap 4
//task1
var var1,var2,var3;
//task2
var legal1,legal2,legal3,legal4,legal5;
// var 1illegal,2illegal,3illegal,4illegal,5illegal;
//task3
document.write("<h1>" + "Rules for naming JS variables" + "</h1>");
document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable" + "<br>" + "Variables must begin with a leter, $ and _.  For example $name, _name or name" + "<br>" + "Variable names are case senitive" + "Variable names should not be JS ");


//chap 5
//task1
var num1=3;
var num2=5;
var sum=num1+num2;
document.write("<br>" + "The sum is " +sum);
//task2
sum=num1-num2;
document.write("<br>" + "The sub is " +sum);
sum=num1*num2;
document.write("<br>" + "The mul is " +sum);
sum=num1%num2;
document.write("<br>" + "The mod is " +sum);
sum=num1/num2;
document.write("<br>" + "The div is " +sum);
//task3
var numb;
document.write("<br>" + "The value of a variable after declaration is "+numb);
numb=5;
document.write("<br>"  + "Initial value "+numb);
numb++;
document.write("<br>" + "value after increment is "+numb);
numb=numb+7;
document.write("<br>" + "Value after addition is "+numb);
numb--;
document.write("<br>" + "Value after decrement is "+numb);
numb=numb%3;
document.write("<br>" + "Reminder is "+numb);
//tsak4
var movie=600;
movie=movie*5;
document.write("<br>" + "Total cost of buying 5 tickets is "+movie);
//task5
var cel=37;
var fah=(cel*(9/5))+32;
document.write("<br>" + cel +"C is" +fah + "F");
var fahr=132;
cel=(fahr-32)*(5/9);
document.write("<br>" + fahr +"F is" +cel + "C");
//task6
var pi1=500;
var pi2=99;
var oi1=3;
var oi2=2;
var ship=100;
document.write("<h1>" + "Shping Cart" + "</h1>");
document.write("<br>" +"Price of item 1 is "+pi1);
document.write("<br>" +"Price of item 2 is "+pi2);
document.write("<br>" +"Quantity of item 1 is "+oi1);
document.write("<br>" +"Quantity of item 2 is "+oi2);
document.write("<br>" +"Shipping charges is "+ship);
var tot=(500*3)+(99*2)+100;
document.write("<br>" +"Total Charges are "+tot);
//task7
var tot=800;
var maro=720;
var per=(maro/tot)*100;
document.write("<br>" + "<h1>" + "Marks sheet" + "</h1>");
document.write("<br>" + "Total markes= "+tot);
document.write("<br>" + "markes Obtained= "+maro);
document.write("<br>" + "Percentage= "+per);
//task9
var us=10;
var sr=25;
tot=(us*104.80)+(sr*28);
document.write("<br>" + "<h1>" + "Currency" + "</h1>");
document.write("<br>" + "Total currency in PKR:"+tot);
//task10
var num=5;
num=num+5*10/2;
//task11
var cyear=2020;
var byear=1999;
age=cyear-byear;
document.write("<br>" + "<h1>" + "Age Calculator" + "</h1>");
document.write("<br>" + "Your age  is "+age);
//task13
var rad=30;
var cir=2*3.142*rad;
var area=3.142*rad*rad;
document.write("<br>" + "<h1>" + "Geometry" + "</h1>");
document.write("<br>" + "The circumfernce is "+cir);
document.write("<br>" + "The are is "+area);


//Chap 6-9
//task1
var val=10;
++val;
document.write("<br>" + "The value of ++a is"+val);
document.write("<br>" + "Now The value of ++a is"+val);
val++;
document.write("<br>" + "The value of a++ is"+val);
document.write("<br>" + "Now The value of a++ is"+val);
--age;
document.write("<br>" + "The value of --a is"+val);
document.write("<br>" + "Now The value of --a is"+val);
age--;
document.write("<br>" + "The value of a-- is"+val);
document.write("<br>" + "Now The value of a-- is"+val);
//task2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>" + " a is "+a);
document.write("<br>" + "b is "+b);
document.write("<br>" + " Result is "+result);
//task3
var spec = prompt("Your Name?", );
alert("Welcome "+spec);
//task4
var num = prompt("Enter Number", "5")

var num = parseInt(num);
var i = 0;
document.write("<br>" + "<h1>" + "Table" + "</h1>");
document.write('<table border="1" cellspacing="0">');
for(i=1;i<10;i++) {
    document.write("<br>" + num + " x " + i + " = " + num*i);
}
//task 5
var sub1 = prompt("Enter Subject 1 Name?", );
var sub2 = prompt("Enter Subject 2 Name?", );
var sub3 = prompt("Enter Subject 3 Name?", );
tot=300;
var sub1m = +prompt("Enter Subject 1 Marks?", );
var sub2m = +prompt("Enter Subject 2 Marks?", );
var sub3m = +prompt("Enter Subject 3 Marks?", );
var otot= sub1m+sub2m+sub3m;
var per=(otot/tot)*100;
document.write("<tr><td>" + sub1 +" " + tot +" "  + sub1m  +" "  + per + "</td></tr>");
document.write("<tr><td>" + sub2  +" " +   tot  +" " + sub2m +" "   + per + "</td></tr>");
document.write("<tr><td>" + sub3 +" "  + tot +" "  + sub3m  +" "  + per + "</td></tr>");



//Chap9-10
//task1
var city= prompt("Enter City Name?", );
if(city=="karachi"){
    alert("Welcome to the city of lights");
}
//task2
var gen=prompt("Enter Your Gender?", );
if(gen=="male"){
    alert("Welcome sir");
}
if(gen=="female"){
    alert("Welcome Ma'am");
}
//task 3
var gen=prompt("Enter Traffic Signal Color?", );
if(gen=="red"){
    alert("Must stop");
}
if(gen=="yellow"){
    alert("Ready to move");
}
if(gen=="Green"){
    alert("move no");
}
//task4
var fuel;
fuel=+prompt("Enter fuel in liters", );
if (fuel==0.25){
    alert("Please refill the fuel in your car");
}
//task 5
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

 if("car" < "cat"){
alert("car is smaller than cat");
}
//task 6
document.write("<br>" + "<h1>" + "Mark sheet" + "</h1>");
var sub1 = prompt("Enter Subject 1 Name?", );
var sub2 = prompt("Enter Subject 2 Name?", );
var sub3 = prompt("Enter Subject 3 Name?", );
tot=300;
var sub1m = +prompt("Enter Subject 1 Marks?", );
var sub2m = +prompt("Enter Subject 2 Marks?", );
var sub3m = +prompt("Enter Subject 3 Marks?", );
var otot= sub1m+sub2m+sub3m;
var per=(otot/tot)*100;
if(per=>80)
document.write("<br>"  +"Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: A+" + "<br>" + "Remarks: Excellent");
else if(per=>70 && per <=80){
document.write("<br>"  +"Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: A" + "<br>" + "Remarks: Good");}

else if(per=>60 && per<=70)
document.write("<br>"  + "Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: B" + "<br>" + "Remarks: You Need to improve");

else (per=>60 )
document.write("<br>"  + "Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: Fail" + "<br>" + "Remarks: Sorry");
//task8
var num = +prompt("Enter Number", );
if(num%3==0)
alert("number is divisible by 3 ");
//task9
var num = +prompt("Enter Number", );
if(num%2==0)
alert("number is even ");
else
alert("number is odd");
//task10
var temp=+prompt("Enter Tempreature", );
if(temp>40)
alert("Temprature is too hot");
else if(temp>30 && temp<40)
alert("Weather is Normal");
else if(temp>20 && temp<30)
alert("Weather is Cool");
else if(temp>10 && temp<20)
alert(" OMG Weather is so Cold");



// Chap 12-13
// task1
var c =prompt("Enter character");
if (c >= 'A' && c<= 'Z'){
alert(+c +"is an UpperCase character"); 
}

else if(c>= 'a' && c <= 'z')
alert(+c +"is an LowerCase character"); 
else{
alert(+c +"is not an aplhabetic character"); }
//task2
var num1, num2;
num1 = prompt("Input the First integer", "0");
num2 = prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   alert("The values "+ num1+ " and "+num2+ " are equal.");
  }
  //task 3
  function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));
//task4

    var vowel_string = "aieouAIEOU";
    input = prompt("Enter a single character...");
    if (input.length == 1){
      if (vowel_string.contains(input)){
           alert(input + " is a vowel");
 }
}
else{
    alert("Enter a single character");
}   
//task5
var greeting;
var hour = 13;
if (hour < 18) 
greeting = "Good day";
else
greeting = "Good evening";
//task6
var num = +prompt("Enter Password", );
var pas = +prompt("Enter Your Password", );

if(num==pas)
alert("Password is Correct");
else("wrong pasword");



//chap 14-16
//task1
var arrayA = [];
//task2
var objectA = {};
//task 3
var cars = ["Saab", "Volvo", "BMW"];
//task4
var num = [10,20,30];
//task5
var boolArray = [true,false];
console.log(boolArray);
//task6
var cars = ["Saab", "Volvo", "BMW",14,12];
//task7
var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"];
for(qual=0;qual<8;qual++){
    document.write("<br>" +qual);
}
//task8
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Percentage: " + (Avgmarks)/students.length);
//task9
let numbers = [80, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);
//task10
var citiess = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selected = cities.slice(1);
//task11
var arr = ["This ", " is" , " my ", " cat"];
document.getElementById("demo").innerHTML = arr.join("");
//task 12
var que=new Array();
que.push("keyboard");
que.push("mouse");
que.push("printer");
que.push("moniter");
alert(que.shift());
alert(que.shift());
alert(que.shift());
alert(que);
//tadsk14
var que=new Array();
que.push("keyboard");
que.push("mouse");
que.push("printer");
que.push("moniter");
alert(que.pop());
alert(que.pop());
alert(que.pop());
alert(que);



//chap17-20
//task1

var Arr=[[1,2],[3,4],[5,6]];
//task2
var items = [
    [0,1, 2.3],
    [1,0,1, 2],
    [2,1,0, 1]
  ];
  console.log(items[0][1][2][3]); 
  console.log(items[0][1][2][3]); 
  console.log(items[0][1][2][3]); 
  console.log(items[0][1][2][3]); 
//task3
for (var input = 1; input <= 10; input++) {
    document.write(input);
   }
//task4
var num = +prompt("Enter Number for mul" );
var j=+prompt("Enter table lenght", );
var ans;
for(i=1;i<=j;i++){
    ans=num*i;
    alert(+num + "*" +i +"="+ans)
}
//task5
var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for(i=0;i<5;i++){
    document.write("<br>" + "Element At index" +i +"is" +[i])
}
//task6
for (var input = 1; input <= 20; input++) {
    document.write("Counting:" +input);
   }
for(input=10;input>=1;input--)
{
    document.write("Reverse:" +input);
}

for (var input = 1; input <= 20; input++) {
    if(input%2==0)
    document.write("Even:" +input);
}
for (var input = 1; input <= 20; input++) {
    if(input%2==1)
    document.write("Odd" +input);
}
//task7
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);
//task8
var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
var min = Math.min.apply(Math, arr)
console.log(min)
//End