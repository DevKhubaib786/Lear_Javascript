// singlton
//object create

// object literal


/*const mySym = Symbol('key1');

const person = {
    name: 'Muhammad ',
    [mySym]: 'mykey1',
    'full name': 'Muhammad Khubaib',
    rollno: 123,
    location: 'Pakistan',
    email: 'mkhubaib786lhr@gmail.com',
    iLoggedIn: false,
};

console.log(person.name);
console.log(person['full name']);
console.log(person[mySym]);

person.email = 'mkubaib7870@gmail.com';
person.email = 'rana@gmail.com';

console.log(person);

person.gretting = function() {
    console.log("Hello BGVG");
};

person.gretting();

person.gretting2 = function() {
    console.log(`Hello Yousaf, ${this["full name"]}`);
};

person.gretting2();*/


const regularUser = {
    email: "mkhubaib786lhr@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Muhammad",
            secondname: "Khubaib"
        }
    }
};

console.log(regularUser.email);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.secondname);

console.log()
