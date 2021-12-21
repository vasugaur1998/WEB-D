
let path=require("path");
let fs=require("fs");
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

// let ext=path.extname(joinedPath);
// console.log(ext);




// VVVVVVVV Important stufffff below
// |
// |
// V

let srcPath="C:\\Users\\HP\\Desktop\\web\\js_revision_\\typeOf.js";

// task-> copy typeOf file from js directory to node directory;

// temp folder banaya jisme typeOf.js file banjayegi
// destFolderPath mei temp file jo humne banai uska path hai

let destFolderPath="C:\\Users\\HP\\Desktop\\web\\temp";
let fileName=path.basename(srcPath);
// console.log(fileName);

let destPath=path.join(destFolderPath,fileName);
fs.copyFileSync(srcPath,destPath);