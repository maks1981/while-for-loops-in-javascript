// for example
for(var count = 0; count < 6; count++) {
    console.log(count);
}

var str = "how are you my friend?";
for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
//print all numbers between 10 and 19
for(var count = -10; count <= 19; count++) {
    console.log(count);
}
//print all even 10 and 40 numbers
for(var count = 10; count <= 40; count++) {
    console.log(count);
}
//odd numbers only
for(var count = 300; count <= 333; count++) {
    if(count % 2 !==0) console.log(count);
}
//Print all numbers divisible by 5 and 3 between 5 and 50.
for(var count = 5; count <=50; count++) {
    if(count % 5 ===0 && count % 3 == 0) console.log(count);
}
// while example
var str = "hello";
var count = 0;
while(count <str.length) {
	console.log(count, str[count]);
	count++;
}

//another explanation
var str = "ahceclwlxo";
for (var i = 1; i <str.length; i+=2){
    console.log(str[i]);
}
// The for loop has three expressions enclosed in the parentheses(brackets):

// 1. Initialization

// 2. Condition

// 3. Final-expression

// So, the given for loop is : 

var str = "ahceclwlxo";
 
for(var i=1; i<str.length; i+=2) {
    console.log(str[i]);
}
// Here, the initialization is i=1; which means that that i  starts from 1. The condition is i<str.length which means i<10 because the length of the string is 10 (not 9), and the final expression is i+=2 , this is a type of short-hand which simply means i=i+2 .

// And finally we are logging str[i] which means the i  element in the string str . Example str[0] = 'a'  , str[3] = 'e' , str[5] = 'l' .

// Let us now solve a few iterations to understand the loop.

// The loop has a total of 5 iterations because it starts with i=1, and increases by 2 every iteration until the condition does not satisfy.

FIRST:

i=1; i<10; i+=2
console.log(str[1]) 
will print 'h'

SECOND:

i=3; i<10; i+=2
console.log(str[3])
will print 'e'

// and so on.... till i=11; i<10; i+=2 Here the condition does not satisfy and it breaks the loop. 

// So finally the output will be "hello"

//another example 

var str = "ahceclwlxo";
 
var output = "";
 
for(var i=1;i<str.length; i+=2){
 output += str[i];
}
 
console.log(output);
// another example

var array = ['A','bird','in','the','hand','is','worth','two','in','the','bush'];
var str = array.join(' ');
console.log(str);



// Annoying game yes or no
// var inputtext = prompt("Are we there yet?");
// function doesitcontainyes(text){
//  if(text.indexOf("yes") >= 0){
//  return true;
//  }
//  return false;
// }
// function repeatasking(){
//  inputtext = prompt("Are we threre yet?");
// }
// while(doesitcontainyes(inputtext) == false){
//  repeatasking();
//  }alert("OMG, FINALLY");






















