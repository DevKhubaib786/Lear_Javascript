
//Synchronous code

console.log("1. Start");

console.log("2. Making tea");

console.log("3. End");

//Asynchronus

console.log("1. Start");

setTimeout(() => {
    console.log("2. Tea is ready");
}, 2000);

console.log("3. End");

//Callback

function orderFood(callback)
{
    console.log("food making")

    setTimeout(() => {
        
    }, 2000);
}
function foodready()
{
    console.log("Food is ready Now")
}

orderFood(foodready);

// Promise
const order = new Promise((resolve, reject) => {
    const foodReady = false;

    setTimeout(() => {
        if (foodReady) {
            resolve("Pizza is ready!");
        } else {
            reject("Sorry, pizza is not available");
        }
    }, 2000);
});

order
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });