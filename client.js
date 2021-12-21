
let libExported=require("./lib");
console.log("Iam a client file");
console.log(libExported.varName);
console.log(libExported.fxn());