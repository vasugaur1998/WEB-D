 // for tree we have to require the fs because yehi given path ya folder ki sari files ko aarray mei desakti hai humme
 let fs =require("fs");
 let path=require("path");



function tree(srcPath){

    // console.log("tree implemented",srcPath);
      if(srcPath==undefined){
          srcPath=process.cwd();
      }
      
      let content=fs.readdirSync(srcPath);
      console.log(content);


      let parentFolderName=path.basename(srcPath);
      console.log("")
    }
    
    module.exports={
        treeFn:tree
    }
  