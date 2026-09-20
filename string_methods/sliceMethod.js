/*
Slicing a string
*/

let msg = "Rhyme Areng";

//Slice the msg string between first name and last name

let slice_start = msg.indexOf("A");
console.log(slice_start);

let first_name = msg.slice(0,6);
let last_name = msg.slice(6,msg.length);
console.log(`My name is : ${first_name}and ${last_name}`);

//replace method can also be used to replace strings

let last_name_replace = last_name.replace("Areng","Raphael");
console.log(last_name_replace);

msg = last_name_replace;

console.log(last_name_replace);

//Repeat method allows a method to repeat multiple times

let name_repeat = msg.repeat(5);
console.log(name_repeat);