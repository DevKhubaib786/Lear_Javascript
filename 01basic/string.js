const name = "Muhammad KHUBAIB";
const repo = "Learn_Javascript";
console.log(name + " is learning " + repo);

//string interpltion 
console.log(`Hello my name is ${name} and I am learning ${repo}`);

const gameName = new String('Khubaib')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('h'));

const newstring = gameName.substring(0, 4);
console.log(newstring);

const newstring2 = gameName.slice(-8, 4);

console.log(newstring2);

const newstring3 = "   Khubaib   ";
console.log(newstring3);
console.log(newstring3.trim());

