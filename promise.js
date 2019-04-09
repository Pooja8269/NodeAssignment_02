var { getCustomer, getTopMovies, sendEmail } = require('../Async/async');

getCustomer(1).then((result) => {
    console.log(result);
    if (result.isGold) {
    getTopMovies().then((result) => {
        console.log(result);
        sendEmail().then((result) => {
            console.log("Result: ", result);
        })
    })
}else console.log("Request Failed");
}).catch((error) => {
console.log("Error: ", error);
})