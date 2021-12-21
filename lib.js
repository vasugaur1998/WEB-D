

let a=10;
function fn(){
    console.log("hello iam fine");
    return "hello";
}

function notToBeExported(){
    console.log("I dont want to be exported");
}

module.exports={
    varName:a,
    fxn:fn 
}