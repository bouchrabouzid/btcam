
const promiseSuccess = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    resolve("Success!");
  }, 4000); 
});

promiseSuccess.then(result => console.log(result));