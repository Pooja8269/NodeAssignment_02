function getCustomer(id) {
    return new Promise((resolve, reject )=> {
        setTimeout(() => {
          resolve({ 
            id: 1, 
            name: 'Mosh Hamedani', 
            isGold: true, 
            email: 'email' 
          });
        }, 4000);
      });
    }


  function getTopMovies() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve (['movie1', 'movie2']);
    }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Request successful");
        }, 4000);
      });
}


 /**@author Pooja Sharma
  *  async/await function */


  // async function getFunctionData(){
  //     try{
       
  //      const customer = await getCustomer(1);

  //      console.log(customer);

  //      if (customer.isGold) {

  //      const movies = await getTopMovies();
  //      const email = await sendEmail(customer.email, movies);

  //          console.log(movies);
  //          console.log(email);

  //     }else console.log("Request Failed");
  //   }catch(err){
  //         console.log('Error: ', err);
  //     }
  // }

  // getFunctionData();




module.exports.getCustomer = getCustomer;
module.exports.getTopMovies = getTopMovies;
module.exports.sendEmail = sendEmail;