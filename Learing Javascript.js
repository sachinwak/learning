/*JavaScript Display Possibilities*/

/*  
Writing into an alert box, using window.alert().
Writing into the HTML output using document.write().
Writing into an HTML element, using innerHTML.
Writing into the browser console, using console.log().
*/

//https://javascript.info/tutorial/bubbling-and-capturing

/*JavaScript Variables*/
var x, y;
var person = "John Doe", carName = "Volvo", price = 200; 

/*JavaScript Statements*/

document.getElementById("demo").innerHTML = "Hello Dolly.";


/*JavaScript Data Types*/

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

// JavaScript Types are Dynamic.
var x;               // Now x is undefined
var x = 5;           // Now x is a Number
var x = "John";      // Now x is a String

//Extra large or extra small numbers can be written with scientific (exponential) notation:
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

//JavaScript Booleans
var x = true;
var y = false;

//JavaScript Arrays
var cars = ["Saab", "Volvo", "BMW"]; 

//JavaScript Objects
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//The typeof Operator
typeof "John"              // Returns "string"
typeof 314                 // Returns "number"
typeof true                // Returns "boolean"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof {name:'John', age:34} // Returns "object"
typeof function myFunc(){}   // Returns "function"
typeof Infinity;        // returns "number"
typeof NaN;             // returns "number"

//Undefined
var person;                // Value is undefined, type is undefined
person = undefined;        // Value is undefined, type is undefined

//You can consider it a bug in JavaScript that typeof null is an object. It should be null.
var person = null;         // Value is null, but type is still an object

//Difference Between Undefined and Null
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true



/*JavaScript Functions*/

function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}


/*JavaScript Objects*/
var car = {type:"Fiat", model:"500", color:"white"}; 

//Accessing Object Properties
objectName.propertyName //car.model;
objectName["propertyName"]  //car["model"]

//Accessing Object Methods
objectName.methodName(); 
name = person.fullName();

//If you access the fullName method, without (), it will return the function definition:

//Do Not Declare Strings, Numbers, and Booleans as Objects!
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object


/*JavaScript Scope*/

//Local JavaScript Variables
function myFunction() {
    var carName = "Volvo";
    // code here can use carName
} 
// code here can not use carName


//Global JavaScript Variables
var carName = " Volvo";
// code here can use carName
function myFunction() {
    // code here can use carName
} 


//Automatically Global
myFunction();

// code here can use carName
function myFunction() {
    carName = "Volvo";
}


//Global Variables in HTML
var carName = "Volvo";
// code here can use window.carName
 
/*The Lifetime of JavaScript Variables
The lifetime of a JavaScript variable starts when it is declared.
Local variables are deleted when the function is completed.
Global variables are deleted when you close the page.*/



/*JavaScript Events*/

//<some-HTML-element some-event="some JavaScript">
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

<button onclick="displayDate()">The time is?</button>
<script>
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>

/*
onchange 		An HTML element has been changed
onclick 		The user clicks an HTML element
onmouseover 	The user moves the mouse over an HTML element
onmouseout 		The user moves the mouse away from an HTML element
onkeydown 		The user pushes a keyboard key
onload 			The browser has finished loading the page
*/



/*JavaScript Strings*/
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

// \ escape character.
var x = 'It\'s alright';

//You can also break up a code line within a text string with a single backslash:
document.getElementById("demo").innerHTML = "Hello \
Dolly!"; 
document.getElementById("demo").innerHTML = "Hello" +    // safe to use than \
"Dolly!"; 


//Objects cannot be compared:
var x = new String("John");             
var y = new String("John");

// (x == y) is false because x and y are different objects
//Comparing two JavaScript objects will always return false.


/*JavaScript String Methods*/
//Finding a String in a String
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate"); 
var sln = txt.length;
var pos = str.lastIndexOf("locate");
var pos = str.search("locate"); 
//Both the indexOf(), and the lastIndexOf() methods return -1 if the text is not found.
//JavaScript counts positions from zero.

//Extracting String Parts

slice(start, end);
substring(start, end);
substr(start, length);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);  // Banana   from start 0
var res = str.slice(-12, -6); // Banana  from last
var res = str.slice(7); //Banana, Kiwi 
var res = str.slice(-12); //Banana, Kiwi     Negative positions do not work in Internet Explorer 8 and earlier.

var res = str.substring(7, 13); //The difference is that substring() cannot accept negative indexes.
var res = str.substr(7, 6);  //Banana The difference is that the second parameter specifies the length of the extracted part.


//Replacing String Content
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");  // replace only one
var n = str.replace(/Microsoft/g, "W3Schools");  // replace all


//Converting to Upper and Lower Case
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
//toLowerCase()


//The concat() Method
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat(" ", text2); 

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

//Extracting String Characters
//	charAt(position)
//	charCodeAt(position)

var str = "HELLO WORLD";
str.charAt(0);  // returns H 
str.charCodeAt(0);  // returns 72  returns the unicode of the character


var str = "HELLO WORLD";
str[0]; // returns H  // do not use it


//Converting a String to an Array
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt = "Hello";       // String
txt.split("");           // Split in characters  


/*Number*/

 var x = 0.2 + 0.1;         // x will be 0.30000000000000004 
 var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3

//Hexadecimal
var x = 0xFF;             // x will be 255 

var myNumber = 128;
myNumber.toString(16);     // returns 80
myNumber.toString(8);      // returns 200
myNumber.toString(2);      // returns 10000000

// Infinity
var myNumber = 2;
while (myNumber != Infinity) {          // Execute until Infinity
    myNumber = myNumber * myNumber;
} 
//Division by 0 (zero) also generates Infinity:


//NaN - Not a Number
var x = 100 / "Apple";  // x will be NaN (Not a Number)
var x = 100 / "10";     // x will be 10   // it is number
var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number 



/*JavaScript Number Methods*/
//toString() returns a number as a string.
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23 

// The toExponential() Method // returns a string, with a number rounded and written using exponential notation.
 var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0 

// The toFixed() Method // returns a string with a specified number of decimals:
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000 

// The toPrecision() Method  //returns a string  with a specified length:
 var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600 

// The valueOf() Method  //returns a number as a number.
var x = 123; 
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23 

//Converting Variables to Numbers

The Number() method
The parseInt() method
The parseFloat() method

x = true;
Number(x);        // returns 1
x = false;     
Number(x);        // returns 0
x = new Date();
Number(x);        // returns 1404568027739
x = "10"
Number(x);        // returns 10
x = "10 20"
Number(x);        // returns NaN 
//Used on Date(), the Number() method returns the number of milliseconds since 1.1.1970. 

parseInt("10");         // returns 10
parseFloat("10.33");     // returns 10.33


//Number Properties
/*
Property 			Description
MAX_VALUE 			Returns the largest number possible in JavaScript
MIN_VALUE 			Returns the smallest number possible in JavaScript
NEGATIVE_INFINITY 	Represents negative infinity (returned on overflow)
NaN 				Represents a "Not-a-Number" value
POSITIVE_INFINITY 	Represents infinity (returned on overflow)
*/


/*JavaScript Math Object*/
Math.PI;            // returns 3.141592653589793 
Math.round(4.7);    // returns 5
Math.pow(8, 2);      // returns 64   //Math.pow(x, y) returns the value of x to the power of y:.
Math.sqrt(64);      // returns 8   //Math.sqrt(x) returns the square root of x:
Math.abs(-4.7);     // returns 4.7   //returns the absolute (positive) value of x:
Math.ceil(4.4);     // returns 5  //returns the value of x rounded up to its nearest integer:
Math.floor(4.7);    // returns 4  // returns the value of x rounded down to its nearest integer:

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
Math.min(0, 150, 30, 20, -8, -200);  // returns -200 
Math.max(0, 150, 30, 20, -8, -200);  // returns 150 

Math.random(); //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

//JavaScript Random
Math.floor(Math.random() * 10);     // returns a number between 0 and 9 
Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10 


/*JavaScript Dates*/
document.getElementById("demo").innerHTML = Date();

//Creating Date Objects // There are 4 ways of initiating a date:
new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds) 


var d = new Date(99, 5, 24, 11, 33, 30, 0);

var d = new Date(99, 5, 24); // Thu Jun 24 1999 00:00:00 GMT+0530 (India Standard Time)

var d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();




/*JavaScript Date Formats*/
//JavaScript Date Input
/*
Type 		Example
ISO Date 	"2015-03-25" (The International Standard)
Short Date 	"03/25/2015"
Long Date 	"Mar 25 2015" or "25 Mar 2015"
Full Date 	"Wednesday March 25 2015"
*/
var d = new Date("2015-03-25"); 


/*JavaScript Date Methods*/
getDate() 			//Get the day as a number (1-31)
getDay() 			//Get the weekday as a number (0-6)
getFullYear() 		//Get the four digit year (yyyy)
getHours() 			//Get the hour (0-23)
getMilliseconds() 	//Get the milliseconds (0-999)
getMinutes() 		//Get the minutes (0-59)
getMonth() 			//Get the month (0-11)
getSeconds() 		//Get the seconds (0-59)
getTime() 			//Get the time (milliseconds since January 1, 1970)

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];  //week (0) means "Sunday"
document.getElementById("demo").innerHTML = days[d.getDay()];

//Date Set Methods
setDate() 			//Set the day as a number (1-31)
setFullYear() 		//Set the year (optionally month and day)
setHours() 			//Set the hour (0-23)
setMilliseconds() 	//Set the milliseconds (0-999)
setMinutes() 		//Set the minutes (0-59)
setMonth() 			//Set the month (0-11)
setSeconds() 		//Set the seconds (0-59)
setTime() 			//Set the time (milliseconds since January 1, 1970)

//Date Input - Parsing Dates
Date.parse("March 21, 2012"); // returns the number of milliseconds between the date and January 1, 1970:


/*UTC Date Methods

UTC date methods are used for working UTC dates (Univeral Time Zone dates):
Method 	Description
getUTCDate() 	Same as getDate(), but returns the UTC date
getUTCDay() 	Same as getDay(), but returns the UTC day
getUTCFullYear() 	Same as getFullYear(), but returns the UTC year
getUTCHours() 	Same as getHours(), but returns the UTC hour
getUTCMilliseconds() 	Same as getMilliseconds(), but returns the UTC milliseconds
getUTCMinutes() 	Same as getMinutes(), but returns the UTC minutes
getUTCMonth() 	Same as getMonth(), but returns the UTC month
getUTCSeconds() 	Same as getSeconds(), but returns the UTC seconds*/


/*JavaScript Arrays*/
var array-name = [item1, item2, ...];       
var cars = ["Saab", "Volvo", "BMW"]; 
var cars = new Array("Saab", "Volvo", "BMW"); 

//Access the Elements of an Array
var name = cars[0];
cars[0] = "Opel"; 

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars; 

//Array Properties and Methods
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays 

//Adding Array Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");  // adds a new element (Lemon) to fruits


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";     // adds a new element (Lemon) to fruits

//Associative Arrays
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;         // person.length will return 3
var y = person[0];             // person[0] will return "John"

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;         // person.length will return 0
var y = person[0];             // person[0] will return undefined

/*WARNING !!
If you use a named index, JavaScript will redefine the array to a standard object.
After that, all array methods and properties will produce incorrect results.*/

//The Difference Between Arrays and Objects
//In JavaScript, arrays use numbered indexes.  
//In JavaScript, objects use named indexes.

/*note: JavaScript does not support associative arrays.*/

//How to Recognize an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
typeof fruits;             // returns object
Array.isArray(fruits);     // returns true   //ECMAScript 5 is not supported in older browsers.

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array     // returns true


/*JavaScript Array Methods*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();  //Banana,Orange,Apple,Mango

document.getElementById("demo").innerHTML = fruits.join(" * "); // Banana * Orange * Apple * Mango

//Popping and Pushing (last)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5


//Shifting And Unshifting (first)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits 

//Changing Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"

//Splicing an Array  (add or remove from index)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");  //Banana,Orange,Lemon,Kiwi,Apple,Mango  (2 where to adds, 0 how many need to be removed)

//Joining Arrays
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = myGirls.concat(myBoys, arr3);     //Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan

//Slicing an Array (create new array opposite of //Joining Arrays)  
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3,2);  // Apple
//The slice() method creates a new array. It does not remove any elements from the source array.
//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.

//JavaScript Sorting Arrays
//The sort() method sorts an array alphabetically: 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();            // Sorts the elements of fruits
fruits.reverse();         // Reverses the order of the elements

// number sorting
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});  //1,5,10,25,40,100   //points[0] contains the highest value

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});  //100,40,25,10,5,1   //points[0] contains the highest value

//Sorting an Array in Random Order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

//Sorting Object Arrays
var cars = [
{type:"Volvo", year:2016},
{type:"Saab", year:2001},
{type:"BMW", year:2010}];

cars.sort(function(a, b){return a.year - b.year}); //

cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});


/*JavaScript Booleans*/
//The Boolean() Function
Boolean(10 > 9)        // returns true 
(10 > 9)              // also returns true
10 > 9                // also returns true 

//The Boolean value of 0 (zero), "" , undefined , null, NaN   are false:   


/*JavaScript Comparison and Logical Operators*/

// Conditional (Ternary) Operator
variablename = (condition) ? value1:value2 ;
var voteable = (age < 18) ? "Too young":"Old enough";

/*JavaScript If...Else Statements*/
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
} 


/*JavaScript Switch Statement*/

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
} 

//Common Code Blocks
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
} 


/*JavaScript For Loop*/
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

//Statement 1
for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}

//The For/In Loop
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
    text += person[x];
}


/*JavaScript While Loop*/
while (i < 10) {
    text += "The number is " + i;
    i++;
}

do {
    text += "The number is " + i;
    i++;
}
while (i < 10);

/*JavaScript Break and Continue*/

// stop loop
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}

// skip the iteration and continute next
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}


//JavaScript Labels
var cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    break list;
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
    text += cars[5] + "<br>";
}


/*JavaScript Type Conversion*/

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object" 

//The constructor Property
"John".constructor                 // Returns "function String()  { [native code] }"
(3.14).constructor                 // Returns "function Number()  { [native code] }"
false.constructor                  // Returns "function Boolean() { [native code] }"
[1,2,3,4].constructor              // Returns "function Array()   { [native code] }"
{name:'John', age:34}.constructor  // Returns" function Object()  { [native code] }"
new Date().constructor             // Returns "function Date()    { [native code] }"
function () {}.constructor         // Returns "function Function(){ [native code] }" 

// check array or not
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

//Converting Numbers to Strings
//number to string
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression

x.toString()
(123).toString()
(100 + 23).toString()

//Booleans to Strings
String(false)        // returns "false"
String(true)         // returns "true" 

String(Date()) 

//Strings to Numbers
Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN 

Number(false)     // returns 0
Number(true)      // returns 1

//The Unary + Operator
var y = "5";      // y is a string
var x = + y;      // x is a number 

//Converting Dates to Numbers
d = new Date();
Number(d)          // returns 1404568027739 
//or
d.getTime()        // returns 1404568027739 


/*JavaScript Bitwise Operations*/
//Converting Decimal to Binary
function dec2bin(dec){
    return (dec >>> 0).toString(2);
} 

//Converting Binary to Decimal
function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
} 


/*JavaScript Regular Expressions*/

//Syntax
/pattern/modifiers; 
var patt = /w3schools/i;

//The search() method uses an expression to search for a match, and returns the position of the match.
//The replace() method returns a modified string where the pattern is replaced.

var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools"); //Visit W3Schools!

/*
i 	Perform case-insensitive matching
g 	Perform a global match (find all matches rather than stopping after the first match)
m 	Perform multiline matching


//Brackets are used to find a range of characters:
[abc] 	Find any of the characters between the brackets
[0-9] 	Find any of the digits between the brackets
(x|y) 	Find any of the alternatives separated with |

//Metacharacters are characters with a special meaning:
Metacharacter 	Description
\d 	Find a digit
\s 	Find a whitespace character
\b 	Find a match at the beginning or at the end of a word
\uxxxx 	Find the Unicode character specified by the hexadecimal number xxxx

Quantifiers define quantities:
Quantifier 	Description
n+ 	Matches any string that contains at least one n
n* 	Matches any string that contains zero or more occurrences of n
n? 	Matches any string that contains zero or one occurrences of n

*/

//Using test()

var patt = /e/;
patt.test("The best things in life are free!");  //true

//Using exec()
/e/.exec("The best things in life are free!"); // e





/*JavaScript Errors - Throw and Try to Catch*/

//The try statement lets you test a block of code for errors.
//The catch statement lets you handle the error.
//The throw statement lets you create custom errors.
//The finally statement lets you execute code, after try and catch, regardless of the result.

try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}


//The throw Statement
throw "Too big";    // throw a text
throw 500;          // throw a number

try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)    throw "too low";
    if(x > 10)   throw "too high";
}
catch(err) {
    message.innerHTML = "Input is " + err;
}


//The finally Statement  //execute code after try and catch, regardless of the result
try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)    throw "is too low";
}
catch(err) {
    message.innerHTML = "Input " + err;
}
finally {
   // document.getElementById("demo").value = "";
}





/*JavaScript Debugging*/

console.log()
//Setting Breakpoints
//At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.
//After examining values, you can resume the execution of code (typically with a play button).

//The debugger Keyword
var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x; 


/*JavaScript Hoisting*/
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//JavaScript Initializations are Not Hoisted


/*JavaScript Use Strict*/
//Strict mode makes it easier to write "secure" JavaScript.
//The "use strict" directive is only recognized at the beginning of a script or a function.

"use strict"; // Defines that JavaScript code should be executed in "strict mode".
x = 3.14;       // This will cause an error because x is not declared

myFunction();
function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}




x = 3.14;       // This will not cause an error.
myFunction();
function myFunction() {
   "use strict";
    y = 3.14;   // This will cause an error
}

//Deleting a variable (or object) is not allowed.
"use strict";
var x = 3.14;
delete x;                // This will cause an error 
function y(p1, p2) {};
delete y;                // This will cause an error  
//Duplicating a parameter name is not allowed:
function x(p1, p1) {};   // This will cause an error 
var x = \010;            // This will cause an error 
var eval = 3.14;         // This will cause an error  // The string "eval" cannot be used as a variable:
var arguments = 3.14;    // This will cause an error //The string "arguments" cannot be used as a variable:
with (Math){x = cos(2)}; // This will cause an error //The with statement is not allowed:


/*JavaScript Best Practices*/
//Avoid global variables,  avoid new,  avoid  ==,  avoid eval()

//Don't Use 
/*
Use {} instead of new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()
*/

var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object

//Use Parameter Defaults
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
} 

//Avoid Using eval()
//The eval() function is used to run text as code.

//It is a common mistake to forget that switch statements use strict comparison:
var x = 10;
switch(x) {
    case "10": alert("Hello");  //This case switch will not display an alert: beacasue data type are different
} 

//Misunderstanding Floats 
var z = (x * 10 + y * 10) / 10;       // z will be 0.3

var x = "Hello \
World!";



/*JavaScript Performance*/

//Better Code:
var i;
var l = arr.length;
for (i = 0; i < l; i++) {}

//Reduce DOM Access
var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";

//Avoid Unnecessary Variables
var fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName; 
// replace with this
document.getElementById("demo").innerHTML = firstName + " " + lastName 


//Delay JavaScript Loading
//Putting your scripts at the bottom of the page body, lets the browser load the page first.
window.onload = downScripts;

function downScripts() {
    var element = document.createElement("script");
    element.src = "myScript.js";
    document.body.appendChild(element);
}




/*JavaScript JSON*/
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

//JSON Data - A Name and a Value
 "firstName":"John"  //JSON names require double quotes. JavaScript names do not.

//JSON Objects
{"firstName":"John", "lastName":"Doe"} 

//JSON Arrays
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]


//Converting a JSON Text to a JavaScript Object
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

//Finally, use the new JavaScript object in your page:
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;




/*JavaScript Forms*/

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
<form name="myForm" action="demo_form.asp" onsubmit="return validateForm()" method="post">
	Name: <input type="text" name="fname">
	<input type="submit" value="Submit">
</form>




/*JavaScript Objects*/
//In JavaScript, objects are king. If you understand objects, you understand JavaScript.
//JavaScript objects are containers for named values, called properties and methods.

//function (person) is an object constructor.
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

//The this Keyword
/*
In JavaScript, the thing called this, is the object that "owns" the JavaScript code.
The value of this, when used in a function, is the object that "owns" the function.
The value of this, when used in an object, is the object itself.
The this keyword in an object constructor does not have a value. It is only a substitute for the new object.
The value of this will become the new object when the constructor is used to create an object.
*/

//JavaScript Objects are Mutable
//They are addressed by reference, not by value.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person;
x.age = 10;           // This will change both x.age and person.age 
//Note: JavaScript variables are not mutable. Only JavaScript objects.



/*JavaScript Object Properties*/

var person = {fname:"John", lname:"Doe", age:25};

for (x in person) {
    txt += person[x];
}

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;   // or delete person["age"]; 
//The delete operator is designed to be used on object properties. It has no effect on variables or functions.


/*JavaScript Object Methods*/
//methodName : function() { code lines }
//objectName.methodName()

name = person.fullName();

//If you access the fullName property, without (), it will return the function definition:
name = person.fullName;

//Adding methods to an object is done inside the constructor function:
function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}
myMother.changeName("Doe");



/*JavaScript Object Prototypes*/
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green"); 


//Adding a Method to an Object
myFather.name = function () {
    return this.firstName + " " + this.lastName;
}; 


/*Javascript Undefined vs NULL*/
/*Many a times we often get confused on whats the difference between UNDEFINED and NULL.
undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.
Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.
Unassigned variables are initialized by JavaScript with a default value of undefined. JavaScript never sets a value to null. That must be done programmatically.*/


/*JavaScript Function Definitions*/
//Self-Invoking Functions
(function () {
    var x = "Hello!!";      // I will invoke myself
})(); 


/*note
A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor.
*/

//Parameter Defaults
function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    }
}


//The Arguments Object
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
} 

x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 


//JavaScript Function Invocation
//this keyword
//In JavaScript, the thing called this, is the object that "owns" the current code.


function myFunction() {
	return this;
}
myFunction();                // Will return the window object 
/*Invoking a function as a global function, causes the value of this to be the global object.
Using the window object as a variable can easily crash your program.*/


//Invoking a Function with a Function Method
//With call() or apply() you can set the value of this, and invoke a function as a new method of an existing object.
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);     // Will return 20 

function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // Will also return 20 


//JavaScript Nested Functions
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
}


//JavaScript Closures
//A closure is a function having access to the parent scope, even after the parent function has closed.
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// the counter is now 3 





/*JavaScript HTML DOM*/
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>
//In the example above, getElementById is a method, while innerHTML is a property.

//Finding HTML Elements
document.getElementById(id) 			//Find an element by element id
document.getElementsByTagName(name) 	//Find elements by tag name
document.getElementsByClassName(name) 	//Find elements by class name  //does not work in Internet Explorer 8 and earlier versions.

//Changing HTML Elements
element.innerHTML //=  new html content 	//Change the inner HTML of an element
element.attribute //= new value 			//Change the attribute value of an HTML element
element.setAttribute(attribute, value) 	//Change the attribute value of an HTML element
element.style.property //= new style 		//Change the style of an HTML element

//Adding and Deleting Elements
document.createElement(element) 	//Create an HTML element
document.removeChild(element) 		//Remove an HTML element
document.appendChild(element) 		//Add an HTML element
document.replaceChild(element) 		//Replace an HTML element
document.write(text) 				//Write into the HTML output stream

//Adding Events Handlers
document.getElementById(id).onclick = function(){code} 	//Adding event handler code to an onclick event

//Finding HTML Objects
document.anchors 				//Returns all <a> elements that have a name attribute 
document.applets 				//Returns all <applet> elements (Deprecated in HTML5) 	
document.baseURI 				//Returns the absolute base URI of the document 	
document.body 					//Returns the <body> element 	
document.cookie 				//Returns the document's cookie 	
document.doctype 				//Returns the document's doctype 	
document.documentElement 		//Returns the <html> element 	
document.documentMode 			//Returns the mode used by the browser 	
document.documentURI 			//Returns the URI of the document 	
document.domain 				//Returns the domain name of the document server 	
document.domConfig 	Obsolete. 	//Returns the DOM configuration 	
document.embeds 				//Returns all <embed> elements 	
document.forms 					//Returns all <form> elements 	
document.head 					//Returns the <head> element 	
document.images 				//Returns all <img> elements 	
document.implementation 		//Returns the DOM implementation 	
document.inputEncoding 			//Returns the document's encoding (character set) 	
document.lastModified 			//Returns the date and time the document was updated 	3
document.links 					//Returns all <area> and <a> elements that have a href attribute 	1
document.readyState 			//Returns the (loading) status of the document 	3
document.referrer 				//Returns the URI of the referrer (the linking document) 	1
document.scripts 				//Returns all <script> elements 	3
document.strictErrorChecking 	//Returns if error checking is enforced 	3
document.title 					//Returns the <title> element 	1
document.URL 					//Returns the complete URL of the document 


//Finding HTML Elements by CSS Selectors  //does not work in Internet Explorer 8 and earlier versions.
var x = document.getElementsByClassName("intro");
var x = document.querySelectorAll("p.intro");

//Finding HTML Elements by HTML Object Collections
var x = document.forms["frm1"];
var text = "";
var i;
for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;  

//Changing the HTML Output Stream
document.write(Date());
//Never use document.write() after the document is loaded. It will overwrite the document.

//Changing the Value of an Attribute
//document.getElementById(id).attribute = new value
<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

//Changing HTML Style
//document.getElementById(id).style.property = new style
document.getElementById("p2").style.color = "blue";

//Create the Animation Using JavaScript
var id = setInterval(frame, 5);

function frame() {
    if (/* test for finished */) {
        clearInterval(id);
    } else {
        /* code to change the element style */ 
    }
} 

//example
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}


//JavaScript HTML DOM Events
//onclick=JavaScript

<h1 onclick="changeText(this)">Click on this text!</h1>

function changeText(id) {
    id.innerHTML = "Ooops!";
}

//Assign Events Using the HTML DOM
document.getElementById("myBtn").onclick = displayDate;

//The onload and onunload Events //user enters or leaves the page.
function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
}
<body onload="checkCookies()">


//The onchange Event
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
 <input type="text" id="fname" onchange="myFunction()">



/*JavaScript HTML DOM EventListener*/
//element.addEventListener(event, function, useCapture);
document.getElementById("myBtn").addEventListener("click", displayDate);
//You can add many event handlers to one element.

//Event Bubbling(inside first) or Event Capturing(outside first)?
//addEventListener(event, function, useCapture);
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true); 


//The removeEventListener() method
//element.removeEventListener("mousemove", myFunction);

//for older version
//element.attachEvent(event, function);
//element.detachEvent(event, function);

//Cross-browser solution:
var x = document.getElementById("myBtn");
if (x.addEventListener) {                    // For all major browsers, except IE 8 and earlier
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {                  // For IE 8 and earlier versions
    x.attachEvent("onclick", myFunction);
} 


//JavaScript HTML DOM Navigation

var myTitle = document.getElementById("demo").innerHTML; 
 // or
var myTitle = document.getElementById("demo").firstChild.nodeValue; 
 // or
var myTitle = document.getElementById("demo").childNodes[0].nodeValue; 

//The nodeName Property
document.getElementById("id01").nodeName;   // H1 Note: nodeName always contains the uppercase tag name of an HTML element.

//nodeType
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;  //1
//Element type 	NodeType
//Element 		1
//Attribute 	2
//Text 			3
//Comment 		8
//Document 		9


/*JavaScript HTML DOM Elements (Nodes)*/

//Creating New HTML Elements (Nodes)
var para = document.createElement("p");
var node = document.createTextNode("This is a new paragraph.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);


//Creating new HTML Elements - insertBefore()
var para = document.createElement("p");
var node = document.createTextNode("This is a new paragraph.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);


//Removing Existing HTML Elements
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
//or
var child = document.getElementById("p1");
child.parentNode.removeChild(child);


//Replacing HTML Elements 
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);  // replace child with para



/*JavaScript HTML DOM Node List*/
//A node list is a collection of nodes
var x = document.getElementsByTagName("p"); 
var y = x[0];
x.length;

//Change the background color of all <p> elements in a node list:
var myNodelist = document.getElementsByTagName("p");
var i;
for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = "red";
} 
/*A node list is not an array!
A node list may look like an array, but it is not. You can loop through the node list and refer to its nodes like an array. 
However, you cannot use Array Methods, like valueOf() or join() on the node list.*/




/*JavaScript Window - The Browser Object Model*/
window.document.getElementById("header");   
//same
document.getElementById("header"); 

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight  || document.documentElement.clientHeight || document.body.clientHeight; 


//Other Window Methods
window.open() 		- open a new window
window.close() 		- close the current window
window.moveTo() 	- move the current window
window.resizeTo() 	- resize the current window

//JavaScript Window Screen
//the window.screen object can be written without the window prefix.
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth



/*JavaScript Window Location */
window.location.href 		// returns the href (URL) of the current page
window.location.hostname 	// returns the domain name of the web host
window.location.pathname 	// returns the path and filename of the current page
window.location.protocol 	// returns the web protocol used (http: or https:)
window.location.assign(URL) 		// loads a new document


/*JavaScript Window History*/
//The window.history object can be written without the window prefix.
history.back() 		//- same as clicking back in the browser
history.forward() 	//- same as clicking forward in the browser


/*JavaScript Window Navigator*/
//The window.navigator object can be written without the window prefix.
navigator.appName  //Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.
navigator.appCodeName  //Mozilla" is the application code name for both Chrome, Firefox, IE, Safari, and Opera.
navigator.platform
navigator.cookieEnabled   // true or false
navigator.userAgent		//Mozilla/5.0 (Windows NT 6.3; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0
//The information from the navigator object can often be misleading, and should not be used to detect browser versions



/*JavaScript Popup Boxes*/
window.alert("sometext");
// or
alert("I am an alert box!");

//Confirm Box
window.confirm("sometext");
var r = confirm("Press a button");
if (r == true) {
    x = "You pressed OK!";
} else {
    x = "You pressed Cancel!";
} 


//Prompt Box
var person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}


//Line Breaks
alert("Hello\nHow are you?");




/*JavaScript Timing Events*/ //window
setTimeout(function, milliseconds);
setInterval(function, milliseconds);

//Stop the Execution
window.clearTimeout(timeoutVariable);


// Show time and re execute after 1 sec
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();  // local time
}

// Stop the Execution
clearInterval(myVar);



/*JavaScript Cookies*/
document.cookie = "username=John Doe";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";  //With JavaScript, you can change a cookie the same way as you create it:

//Delete a Cookie with JavaScript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 

//A Function to Set a Cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

//A Function to Get a Cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 


//A Function to Check a Cookie
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}


