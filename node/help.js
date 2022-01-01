const organize = require("./organize")

function help(){

    console.log(`List of All commands:
        1. node main.js tree "path"
        2. node main.js organize "path"
        3. node main.js help
    
    `);
    
    }
    
    module.exports={
        helpFn:help
    }