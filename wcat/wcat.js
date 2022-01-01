// 1- If file entered is not found then it gives file does not exist error. ✅
// 2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order. ✅




let fs=require("fs");
let inputArr=process.argv.slice(2);
console.log(inputArr);


// let filesArr=inputArr;


let optionArr=[];
let filesArr=[];

for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}







for(let i=0;i<filesArr.length;i++){
    // path hi pass karna padhega files ka
    let ans=fs.existsSync(filesArr[i]);
    if(ans==false){
        console.log("files doesnt exist");
        // return;
    }
}

    let content="";
    for(let i=0;i<filesArr.length;i++){
        content=content+ fs.readFileSync(filesArr[i])+"\r\n";
    }

console.log(content.split("\r\n"));
// console.log(optionArr);


// removing the extra ' ' 
let contentArr=content.split("\r\n");
let isPresent=optionArr.includes("-s");
if(isPresent){
 for(let i=0;i<contentArr.length;i++){

    if(contentArr[i]=="" && contentArr[i-1]==""){
        contentArr[i]=null;
    }
    else if(contentArr[i]== "" && contentArr[i-1]==null){
        contentArr[i]=null;
    }
}
let tempArr=[];
for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]!=null){
        tempArr.push(contentArr[i]);
    }
}
contentArr=tempArr;

}
console.log(contentArr);
console.log(contentArr.join("\n"));