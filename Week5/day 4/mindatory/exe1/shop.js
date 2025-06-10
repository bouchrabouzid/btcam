const products = require('./products.js')

const findProduct = (name) =>{
    for (let product of products) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            console.log('product found :');
            console.log(product);
            return
        }
    }
    console.log('product not found:' , name);
    
}


findProduct("Notebook");
findProduct("T-Shirt");
findProduct("Laptop");