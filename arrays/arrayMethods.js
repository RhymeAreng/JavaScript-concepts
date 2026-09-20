/*
Push, Pop, Unshift, Shift
*/

// Push - add to end
let dota_heroes = ["Axe","Dazzle", "Mirana"];
console.log(dota_heroes);
dota_heroes.push("Meepo");
console.log(dota_heroes);

//Pop - deletes and returns the last element
let deleted_hero = dota_heroes.pop();
console.log(dota_heroes);
console.log(deleted_hero);

//Unshift - add to start
dota_heroes.unshift("Lion");
console.log(dota_heroes);

//Shift - deletes and returns the first element
deleted_hero = dota_heroes.shift();
console.log(deleted_hero);
console.log(dota_heroes);

//Indexof - Searchers for the index of the element
console.log(dota_heroes.indexOf('Axe'));

//Includes - returns a boolean of the element
console.log(dota_heroes.includes('Axe'));

//Constant arrays - array can be mutable but not reference

//Splice - step wise deletion and insertions of element in list. 

//nested array - matrices like n dimension arrays



/* 
Practice:
start : ['janurary','july','march','august']
final : ['july','june','march','august']
*/
let months = ['january','july','march','august'];
months.shift();
console.log(months);
months[1] = 'june';
console.log(months);
months[2] = 'march';
months.push('august');
console.log(months);

