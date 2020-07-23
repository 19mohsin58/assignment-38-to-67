
//Chapter38 to 42  #  01

function power(){

 var a = prompt("Enter The Value Of a")
  var b = prompt("Enter The Value Of b")
  var result;
  result= Math.pow(a,b)
  alert(result)

}


//Chapter38 to 42  #  02


function leap(){
var a = document.getElementById('year').value;
	
	if (a % 4 == 0) {
		alert("YEAR IS LEAP YEAR")
	}
	else{
		alert("NOT A LEAP YAER")
	}
 	
 }


//Chapter38 to 42  #  03


function triangleArea(){
		var a1 = document.getElementById("a").value;
		var b2 = document.getElementById("b").value;
		var c3 = document.getElementById("c").value;
		num1 = parseInt(a1)
		num2 = parseInt(b2)
		num3 = parseInt(c3)
		var s =  num1 + num2 + num3 /2;
		var result = Math.sqrt(s*((s-num1)*(s-num2)*(s-num3)))
		alert("THE AREA OF TRIANGLE IS "+result)
}





function mainFunc(){

	average();
	percentage();

}





function average(){
	
		var a = document.getElementById("name").value
		var b = document.getElementById("eng").value
		var c = document.getElementById("sin").value
		var d = document.getElementById("urdu").value
		e = parseInt(b)
		f = parseInt(c)
		g = parseInt(d)
		var ave = (e+f+g)/3
		alert(a+ " Averag of Marks is "+ave)
}


function percentage(){
	
		var a = document.getElementById("name").value
		var b = document.getElementById("eng").value
		var c = document.getElementById("sin").value
		var d = document.getElementById("urdu").value
		e = parseInt(b)
		f = parseInt(c)
		g = parseInt(d)
		var ave = e+f+g;
		var per = (ave*100)/300
		alert(a+ " percentage of Marks is "+per+"%")
}



//Chapter38 to 42  #  06

 function remove(){
 	var str = "web and mobile application development"
 	var a = str.replace(/[aeiou]/gi, "")
 	alert(a)
 }






//Chapter38 to 42  #  07


function findOccurrences() {
  var str = "Pleases read this application and give me gratuity";
  var chars = str.toLowerCase().split("");
  var count = 0;
  
  // Loop over every character
  for(let i = 0; i < chars.length - 1; i++) {
    var char = chars[i];
    var next = chars[i + 1];
    
    // Increase count if both characters are any of the following: aeiou
    if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
      count++
    }
  }
  
  return count;
}

// Check if a character is any of the following: aeiou
function isCorrectCharacter(char) {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function result(){
	var found = findOccurrences();
	alert("Occurence Of  two vowels in sentence  "+found)
}






//Chapter38 to 42  #  08


function mainKm(){
					meter()
					feet()
					inches()
					centiM()
}

function meter(){
	var kiloM = document.getElementById("km").value
	km = parseInt(kiloM)
	var result = km*1000
	alert(km+" KM Has"+result+" Meters")
}


function feet(){
	var kiloM = document.getElementById("km").value
	km = parseInt(kiloM)
	var result = km*3281
	alert(km+" KM Has"+result+" Feets")
}

function inches(){
	var kiloM = document.getElementById("km").value
	km = parseInt(kiloM)
	var result = km*39370
	alert(km+" KM Has"+result+" Inches")
}


function centiM(){
	var kiloM = document.getElementById("km").value
	km = parseInt(kiloM)
	var result = km*100000
	alert(km+" KM Has"+result+" Centimeters")
}









//Chapter38 to 42  #  09

function hour(){
	var a = document.getElementById("h").value
	var res = a*12
	alert("YOUR OVERTIME PAY IS "+res+" RUPEES")
}





//Chapter38 to 42  #  10
function cashier(){
	var draw = document.getElementById("with").value
	var hun = Math.floor(draw / 100);
	var fif = Math.floor((draw % 100) / 50);
	var ten = Math.floor((((draw % 100) % 50) / 10));
	var rem = Math.floor((((draw % 100) % 50) % 10));
	alert("Required Notes of Hundreds are "+hun)
	alert("Required Notes of Fifties are "+fif)
	alert("Required Notes of Tens are "+ten)
	alert("Required Remaining Amount "+rem)
}





//Chapter43 to 48  # 03
function myDlt() {
  document.getElementById("myTable").deleteRow(1);
}




//Chapter43 to 48  # 04

function before(){
	var carimg = document.getElementById('img')
	carimg.src = "car2.jpg"
}

function after(){
	var carimg = document.getElementById('img')
	carimg.src = "car1.png"
} 







//Chapter 43 to 48 #05

var num = 0;
function increase(){
	num+=1;
	document.getElementById("num").innerHTML = num;
}
function decrease(){
	num-=1;
	document.getElementById("num").innerHTML = num;
}








//Chapter49 to 52  # 01
function formIn(){
var fname = document.getElementById('fname').value;
console.log("FIRST NAME : "+fname)
var lname = document.getElementById('lname').value;
console.log("LAST NAME : "+lname)
var email = document.getElementById('email').value;
console.log("EMAIL : "+email)
}




//Chapter49 to 52  # 02


function readMore(){
	var text = "ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
	document.getElementById('p').innerHTML=text;
}




//Chapter49 to 52  # 03



//Chapter58 to 67  # 01


//i
function quesI(){
	var a = document.getElementById('content')
//ii
for (var i = 0; i < 10; i++) {
	console.log(a.childNodes[i])

}
}



//iii
function quesIII(){
	var b = document.getElementsByClassName("render")
for (var i = 0; i < b.length; i++) {
	console.log(b[i].innerHTML)
}
}




//iv
function ques45(){
	var c = document.getElementById('first').value = "MOHSIN ALI"
console.log("FIRST NAME : "+c);

var d = document.getElementById('last').value = "JOKHIO"
console.log("LAST NAME : "+d);

var e = document.getElementById('email').value = "mohsinjokhio320@gmail.com"
console.log("Email Adress : "+e);
}



//Chapter58 to 67  # 02
 
function quest2i(){
 var f = document.getElementById('form').nodeType
 console.log(f)	
}

function quest2ii(){
	var g = document.getElementById('last').nodeType
	console.log(g)
	console.log(g.childNodes[0].nodeType)
}

function quest2iv(){
	var a = document.getElementById('content').firstChild;
	var b = document.getElementById('content').lastChild;
	console.log("first Child"+a)
	console.log("last Child"+b)
}

function quest2v(){
	var a = document.getElementById('last').previousSibling;
	var b = document.getElementById('last').nextSibling;
	console.log(a)
	console.log(b)
}


function quest2vi(){
	var a = document.getElementById('email').nodeType;
	var b = document.getElementById('email').parentNode;
	console.log(a)
	console.log(b)

}
