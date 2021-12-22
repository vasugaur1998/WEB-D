

// input
let inputArr=process.argv.slice(2);
// console.log(inputArr);
let helpObj=require("./help");
let treeObj=require("./tree");
let organizeObj=require("./organize");

let cmd=inputArr[0];

switch(cmd){

    case "help":
        helpObj.helpFn();
          break;
    case "tree" :
        treeObj.treeFn(inputArr[1]);
        break;
    case "organize" :
        organizeObj=organizeFn(inputArr[1]);
          break;
   default:
       console.log("wrong command. Kindly enter  help to see all the commands");
       break;


}

