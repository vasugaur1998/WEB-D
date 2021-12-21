// yeh path agya file ka jisme js file hai.
let helpObj=require("./command/help");
let treeObj=require("./command/tree");
let organizeObj=require("./command/organize");
let inputArr=process.argv.slice(2);
let command=inputArr[0];

switch(command){

    case  "tree":
        treeObj.treeFxn(inputArr[1]);
          break;
   
   case "organise":
       organizeObj.organizefn(inputArr[1]);
          break;
   case "help":
       helpObj.helpFn(inputArr[1]);
         break;
         default:
             console.log("kndly enter the correct command");
             break;
}


//yeh command dalenge terminal pe


// node main_ans.js help "C:\Users\HP\Desktop\webd\activity"