
let addBtn=document.querySelector(".add-btn");
let addFlag=false;
let modalCont=document.querySelector(".modal-cont");
addBtn.addEventListener("click",(e)=>{
//   display model
// generate ticket

// addflag=true--> display model
// addfalg=false-->dispaly hatado

addFlag=!addFlag;
if(addFlag){
    modalCont.style.display= "flex";
}
else{
    modalCont.style.display="none";
}
   

});