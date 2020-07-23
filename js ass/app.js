//Chap 38-44
//task1
function power(a,b){
    return Math.pow(a,b);
}

alert(power(3,5));


//task2
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

//task3
var side1 = +prompt("Enter side1?", ); 
var side2 = +prompt("Enter side2?", ); 
var side3 = +prompt("Enter side 3?", );
function area(side1,side2,side3)
{
var s = (side1 + side2 + side3)/2;
var are =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));}
area();

console.log(area);

//task4
var s1 = +prompt("Enter marks1?", );
var s2 = +prompt("Enter marks2?", );
var s3 = +prompt("Enter marks3?", );
function average(){
    var avg= s1+s2+s3/3; 
   alert(avg);
}
function percentage(){
    var per= (s1+s2+s3/300)*100;
    alert(per);
}

average();
percentage();


//task5
var strings = "brghahubevwhohodhhh"; 
 function vowel(){                         

 string = strings.replace( /[aeiou]/g, '' );              

console.log(string);}
vowel();


//task6
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;

    switch (str) {
        case 'a':
            count++;
        case 'A':
            count++
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return 1;
        default:
            return 0;
    }
}

findOccurrences();

//task7

var km = +prompt("Enter distance b/w cities in km", );
 function meter(){
     var m=km*1000;
     console.log(m);
 }
 function cenm(){
     var cm=km*100000
     console.log(cm);
 }
 function feet(){
     var ft=km*3281;
     console.log(ft);
 }
 function inch(){
     var inc=km*39370;
     console.log(inc);

 }
 meter();
 cenm();
 feet();
 inch();

 //task8
 var count = 1, working_hours, over_time;
 var over_time_pay;

 while(count<=10)
 {
    working_hours = +prompt("Enter the working hours of employee no" , );
     
     if(working_hours>40)
     {
         over_time = working_hours - 40;
         over_time_pay = over_time * 12.00;
         console.log("over time pay is " +over_time_pay);
     }
     count++;
    }

    //task9
    var amount;
  
 
    amount = +prompt("Enter amount", );
   
   var hun=amount/100;
   var fif= (amount%100)/50;
   var ten= (((amount%100)%50)/10);
   alert("Required notes of Rs. 100  :"+ hun);
   alert("Required notes of Rs. 50   : " + fif);
   alert("Required notes of Rs. 50   :" +ten);
    

  // Chapter 43-48 (EVENTS)



            function deleteRow(r) {
                var i = r.parentNode.parentNode.rowIndex;
                document.getElementById("myTable").deleteRow(i);
            }
            
            // Task No 14
            
            
            function changeImage(id,src){
                var image = document.getElementById(id);
                image.src = src
            }
            
            // Task No 15
            
     
            
            var x = 0;
            
            document.getElementById('output-area').innerHTML = x;
            
            function button1() {
              document.getElementById('output-area').innerHTML = ++x;
            }
            
            function button2() {
              document.getElementById('output-area').innerHTML = --x;
            }
            
   // Chapter 49-52 (EVENTS)
            
            // Task No 16

            
            function testVariable() {
                var strText = document.getElementById("textOne").value;          
                var strText1 = document.getElementById("textTwo").value;
                var result = strText + ' ' + strText1;
                document.getElementById('spanResult').textContent = result;
                 
            }
            
            // Task No 17
            

            
            function myFunction() {
                var dots = document.getElementById("dots");
                var moreText = document.getElementById("more");
                var btnText = document.getElementById("myBtn");
              
                if (dots.style.display === "none") {
                  dots.style.display = "inline";
                  btnText.innerHTML = "Read more"; 
                  moreText.style.display = "none";
                } else {
                  dots.style.display = "none";
                  btnText.innerHTML = "Read less"; 
                  moreText.style.display = "inline";
                }
              }
            
            // Task No 18
            

            
            function edit_row(no){
                document.getElementById("edit_button"+no).style.display="none";
                document.getElementById("save_button"+no).style.display="block";
                            
                var name=document.getElementById("name_row"+no);
                var country=document.getElementById("country_row"+no);
                var age=document.getElementById("age_row"+no);
                            
                var name_data=name.innerHTML;
                var country_data=country.innerHTML;
                var age_data=age.innerHTML;
                            
                name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
                country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
                age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
            }
                        
            function save_row(no){
                var name_val=document.getElementById("name_text"+no).value;
                var country_val=document.getElementById("country_text"+no).value;
                var age_val=document.getElementById("age_text"+no).value;
                        
                document.getElementById("name_row"+no).innerHTML=name_val;
                document.getElementById("country_row"+no).innerHTML=country_val;
                document.getElementById("age_row"+no).innerHTML=age_val;
                        
                document.getElementById("edit_button"+no).style.display="block";
                document.getElementById("save_button"+no).style.display="none";
            }
                        
            function delete_row(no){
                document.getElementById("row"+no+"").outerHTML="";
            }
                        
            function add_row(){
            
                var new_name=document.getElementById("new_name").value;
                var new_country=document.getElementById("new_country").value;
                var new_age=document.getElementById("new_age").value;
                            
                var table=document.getElementById("data_table");
                var table_len=(table.rows.length)-1;
                var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
                        
                document.getElementById("new_name").value="";
                document.getElementById("new_country").value="";
                document.getElementById("new_age").value="";
            }
            
  // Chapter 53-58 (EVENTS)
            
            // Task No 19
            
    
            
            function changeImage_1(){
                var image_1 = document.getElementById('img_1');
                image_1.style.width = '40%'
            }
            
            function changeImage_2(){
                var image_2 = document.getElementById('img_2');
                image_2.style.width = '40%'
            }
            
            function changeImage_3(){
                var image_3 = document.getElementById('img_3');
                image_3.style.width = '40%'
            }
            
            function changeImage_4(){
                var image_4 = document.getElementById('img_4');
                image_4.style.width = '40%'
            }
            
            // Task No 20
            
  
            
            function zoomin() { 
                var MMAA = document.getElementById("zoom"); 
                var currWidth = MMAA.clientWidth; 
                MMAA.style.width = (currWidth + 100) + "px"; 
            } 
              
            function zoomout() { 
                var MMAA = document.getElementById("zoom"); 
                var currWidth = MMAA.clientWidth; 
                MMAA.style.width = (currWidth - 100) + "px"; 
            }
            
  // Chapter 58-67 (DOM)
            
            // Task No 21
            
            // (i)
            
            var a = document.getElementById('main-content');
            console.log(a)
            
            // (ii)
            
            var a = document.getElementById('main-content')
            console.log(a.childNodes)
            
            // (iii)
            
            var a = document.getElementsByClassName('render')
            console.log(a)
            
            // (iv)
            
            document.getElementById("first-name").value = "Muhammad Hashim";
            
            // (v)
            
            document.getElementById("last-name").value = "Raza"
            document.getElementById("email").value = "kinghashimraza98@gmail.com"
            
            // Task No 22
            
            // (i)
            
            var a = document.getElementById('form-content')
            console.log(a.nodeType)
            
            // (ii)
            
            var a = document.getElementById('last-name')
            console.log(a.nodeType)
            console.log(a.childNodes)
            
            // (iii)
            
            var textnode = document.createTextNode("middleName");
            var item = document.getElementById("lastName").childNodes[0];
            console.log(item.replaceChild(textnode, item.childNodes[0]));
            
            // (iv)
            
            var a = document.getElementById('main-content')
            console.log(a.firstChild)
            var a = document.getElementById('main-content')
            console.log(a.lastChild)
            
            // (v)
            
            var a = document.getElementById('lastName')
            console.log(a.nextSibling)
            var a = document.getElementById('lastName')
            console.log(a.previousSibling)
            
            // (vi)
            var a = document.getElementById('email');
            console.log(a.parentNode);
            console.log(a.nodeType);
   






