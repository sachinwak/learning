/*
AJAX is not a programming language.
AJAX is a technique for accessing web servers from a web page.
AJAX stands for Asyncronous JavaScript And XML.
*/

//Function loadDoc()
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
} 


//Create an XMLHttpRequest Object
//Syntax for creating an XMLHttpRequest object:
variable = new XMLHttpRequest();

//Old versions of Internet Explorer (IE5 and IE6) use an ActiveX Object:
variable = new ActiveXObject("Microsoft.XMLHTTP");

// Cross Browser
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");  //ie5
}


//XMLHttpRequest Object Methods
//Method 	Description
new XMLHttpRequest() 					Creates a new XMLHttpRequest object
abort() 								Cancels the current request
getAllResponseHeaders() 				Returns header information
getResponseHeader() 					Returns specific header information
open(method, url, async, user, psw) 	Specifies the request

										method: the request type GET or POST
										url: the file location
										async: true (asynchronous) or false (synchronous)
										user: optional user name
										psw: optional password

send() 									Sends the request to the server
										Used for GET requests

send(string) 							Sends the request to the server.
										Used for POST requests

setRequestHeader() 						Adds a label/value pair to the header to be sent


//XMLHttpRequest Object Properties
onreadystatechange 						Defines a function to be called when the readyState property changes
readyState 								Holds the status of the XMLHttpRequest.
										0: request not initialized
										1: server connection established
										2: request received
										3: processing request
										4: request finished and response is ready

responseText 							Returns the response data as a string

responseXML 							Returns the response data as XML data

status 									Returns the status-number of a request
										200: "OK"
										403: "Forbidden"
										404: "Not Found"
										For a complete list go to the Http Messages Reference

statusText 								Returns the status-text (e.g. "OK" or "Not Found")




//GET Requests
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
xhttp.send();
//to avoid  cached result,
xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true);
xhttp.send();

//POST Requests
xhttp.open("POST", "demo_post.asp", true);
xhttp.send();

xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");

//Async = true
//When using async = true, specify a function to execute when the response is ready in the onreadystatechange event:


//Async = false
xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;


// Using a Callback Function
loadDoc("url-1", myFunction1);
loadDoc("url-2", myFunction2);
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
} 


//The responseXML Property
xmlDoc = xhttp.responseXML;
txt = "";
x = xmlDoc.getElementsByTagName("ARTIST");
for (i = 0; i < x.length; i++) {
  txt += x[i].childNodes[0].nodeValue + "<br>";
  }
document.getElementById("demo").innerHTML = txt;
xhttp.open("GET", "cd_catalog.xml", true);
xhttp.send();


//The getAllResponseHeaders() Method
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
  }
};


//The getResponseHeader() Method
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified");
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send(); 



/*AJAX PHP Example*/
function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str, true);
        xmlhttp.send();
    }
}
<form>
First name: <input type="text" onkeyup="showHint(this.value)">
</form>

 <?php
// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?> 


//AJAX Database Example
//When a user selects a customer in the dropdown list above, a function called "showCustomer()" is executed. 
//The function is triggered by the "onchange" event:
function showCustomer(str) {
  var xhttp;
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "getcustomer.asp?q="+str, true);
  xhttp.send();
} 


//Navigate Between the CDs
<div id='showCD'></div><br>
<input type="button" onclick="previous()" value="<<">
<input type="button" onclick="next()" value=">>">

<script>
var i = 0;
displayCD(i);

function displayCD(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this, i);
        }
    };
    xmlhttp.open("GET", "cd_catalog.xml", true);
    xmlhttp.send();
}
function myFunction(xml, i) {
    var xmlDoc = xml.responseXML; 
    x = xmlDoc.getElementsByTagName("CD");
    document.getElementById("showCD").innerHTML =
    "Artist: " +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " + 
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
function next() {
if (i < x.length-1) {
  i++;
  displayCD(i);
  }
}
function previous() {
if (i > 0) {
  i--;
  displayCD(i);
  }
}
</script>
