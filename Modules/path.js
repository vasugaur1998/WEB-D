const { equal } = require("assert");
let path=require("path");
const { execArgv } = require("process");

// let tobeCopiedFileName=
let currentPath=process.cwd();
console.log("currentPath",currentPath);
let joinedPath=path.join(currentPath,"abc","def","efg","f1.txt");

// joinedPath me jo path pass kiya hai usme "abc","def"."efg" agey lagjayenge append hojayege basically
// eg .= C:\Users\HP\Desktop\webd\Modules
// C:\Users\HP\Desktop\webd\Modules\abc\def\efg


console.log(joinedPath);


// gives last part of the path
let lastPotion=path.basename(joinedPath);
console.log("last potion",lastPotion);


// gives the extention of the last part of the path

let ext=path.extname(joinedPath);
console.log(ext);
