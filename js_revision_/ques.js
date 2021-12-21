
function isPrime(input){

  let flag=true;
  for(let i=2;i*i<=input;i++){
     if(input%i==0){
         flag=false;
         break;
     }
       
  }
  if(flag==true){
      console.log("True");
  }
  else{
      console.log("False");
  }



}


function convert_first_char_to_upperCase(input){


let arrStr=input.split(" ");
for(let i=0;i<arrStr.length;i++){
  let word=arrStr[i];
    arrStr[i]=word.charAt(0).toUpperCase()+word.slice(1);
}
// console.log(arrStr.join(" "));
// console.log(arrStr);
}
convert_first_char_to_upperCase("I'm a little tea put");