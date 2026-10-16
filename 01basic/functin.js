/*function name ()
{
    console.log("Muhammad Khubab")
}

name();  


function addtwonumber(a,b)
{
    let result = a+b
    return result
}
const result = addtwonumber(3,5)
console.log("Result:" , result)


function loginuser(username) {
    return `${username} just logged In`;
}

console.log(loginuser("Khubaib"));

/*function calculatecartprice(...num1)
{
   return num1
}
console.log(calculatecartprice(200,400,500,2000)

function calculatecartprice(val1, val2, ...num1)
{
   return num1
}
console.log(calculatecartprice(200,400,500,2000))*/

const user = {
    name: "Khubaib",
    rollno: 101
};

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name}
and rollno is ${anyobject.rollno}`);
}


handleObject(user);

const myarray = [200,400,600,700]
function secondvalue(getarray)
{
    return getarray[1]
}

console.log(secondvalue(myarray));

