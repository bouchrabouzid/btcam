const { log } = require('console')
const fs = require('fs')

fs.readdir('.' , (err , files) => {
    if (err) {
        console.log('error' , err);
        return
    }

    console.log(files);
})