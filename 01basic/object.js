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


/*const regularUser = {
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

const obj1 = {1:"a,", 2:"b" }
const obj2 = {3:"c", 4:"d" }
//const obj3 = Object.assign( {}, obj1,obj2)
//const obj3 = Object.assign(  obj1,obj2)

const Obj3 = {...obj1,...obj2}

console.log(Obj3);

const users = [
    {
        id: 1,
        email: "mkhubaib786lhr@gmail.com"
    }

]

const person = {
    id: 123,
    name: "Khubaib",
    email: "mkhubaib786lhr@gmail.com"
};

console.log(Object.keys(person));
console.log(Object.values(person));*/

// destucting and  


const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Chai Aur Code"
};

const { courseInstructor: instructor } = course;

console.log(instructor);


/*{
    "name":"Khubaib"
    "id": "23st017"
    "Department": "Software"
 }*/





