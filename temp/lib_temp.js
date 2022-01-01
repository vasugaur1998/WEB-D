

let a=20;
function fn(){
    console.log("hello iam a boy");
    return "hello";
}

function notTobeExported(){
    console.log("I dont want to be exorted");
}



module.exports={
    varName:a,
    fxzn:fn
}