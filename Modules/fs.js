
let fs=require("fs");

// file create/delete/update/move
// folder-> content read,create,remove

let content =fs.readFileSync("f1.txt");
// console.log("content ",content);
// console.log("content "+ content);


// In writefileSyc
// format-->(file name,file k andar jo likhna hai voh ayega);
// if file nhi hogi to new banjayegi and if hogi to override holegi
fs.writeFileSync("abc.txt","hello vasu bhai kaisa hai");




//append

fs.appendFileSync("abc.txt","pepcoding courses");


// fs.mkdirSync("C:\\Users\\HP\\Desktop\\webd\\HTML_in_one_video","f1.txt");



// fs.readdirSync se jop bhi folder pass kiya hai uske andar ki directories a/files ek array ke form me miljati hai humme

// let address="C:\\Users\\HP\\Desktop\\webd\\HTML_in_one_video";
let address="C:\\Users\\HP\\Desktop\\webd\\JS_revision";
//  let content_=fs.readdirSync(address);
//  console.log(content_);



//  check ki yeh file exist karti hai ya nhi
//  let doesExist=fs.existsSync("fs1.js");
//  console.log(doesExist);





//  check that the path jo pass kiya hai ki voh file hai ya directorry hai?
let statsOfAPath=fs.lstatSync(address);
console.log("isFile?",statsOfAPath.isFile());


console.log("isdirectory?",statsOfAPath.isDirectory());





// copy file sync->Written In the notes



