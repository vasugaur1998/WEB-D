
let obj={};
let cap={
//   properties
 name:"steve",
 "last Name":"Rogers",
  friends: ["Peter","Bruce","Tony"],
  age:34,
  address:{
      state:"New York",
      city: "NY City"
  },
  isAvenger:true,

//   methods
  sayHi: function(){
      console.log("cap say's Hi");
  },
  10:"My value id 10"
 }

//  printing the object
// console.log(obj);

// access
// console.log("first Name",cap.name);
// console.log("Friends",cap.friends);
// console.log("city",cap.address.city);
// console.log("isavenger",cap.address.state);


// methods call

// cap.sayHi();


// access way-> [] operator

// yeh keys for object me dhoondhega 
// 1. whenever you have key that has space in it in the object. eq:- line 6 me
// 2. you have to access key is of type number

// console.log("last name",cap["last Name"]);
// console.log("10 value ",cap[10]);



// let varName=10;
// console.log("value is",cap[varName]);
// varName="address";
// console.log("value is",cap[varName]);


// loop over an object


// for(let key in cap){
//     // values comes in random order
//     console.log(key,":",cap[key]);
// }


// if key not found
 console.log(cap.abc);
 let age="address";
console.log(cap.age);
console.log(cap[age]);



// set/update/delete

// set/add-------> . lagake add hojata hai
cap.movies=["First avenger","civil war","avengers"];

// update--------> . lagake hi update hojayega
cap.age=45;

// delete
delete cap.friends

console.log(cap);