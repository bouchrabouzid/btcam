
Promise.resolve(3)
  .then(value => console.log("Resolved with:", value));


Promise.reject("Boo!")
  .catch(error => console.log("Rejected with:", error));