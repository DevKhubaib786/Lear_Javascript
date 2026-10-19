class user 
{
    constructor(name , email){
        this.name =name;
    this.email = email;

    }
    login()
    {
        console.log(`${this.name} Login in`);
    }
    
}

const user1 = new user("Khubaib","mkhubaib786lhr@gmail.com")
const user2 = new user("Yousaf", "myousaf@gmail.com")

console.log(user1.name);
console.log(user2.email);

user1.login();
user2.login();



