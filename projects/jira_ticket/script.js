
let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let mainCont = document.querySelector(".main-cont");
let addFlag = false;
let removeFlag = false;
let modalCont = document.querySelector(".modal-cont");
let textareaCont = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1];

let lockClass="fa-lock";
let unlockClass = "fa-lock-open";


// listner for modal priority coloring
allPriorityColors.forEach((colorElem, idx) => {
    colorElem.addEventListener("click", (e) => {
        allPriorityColors.forEach((priorityColorElem, idx) => {
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");
        modalPriorityColor = colorElem.classList[0];
    })
})


addBtn.addEventListener("click", (e) => {
    //   display model
    // generate ticket

    // addflag=true--> display model
    // addfalg=false-->dispaly hatado

    addFlag = !addFlag;
    if (addFlag) {
        modalCont.style.display = "flex";
    }
    else {
        modalCont.style.display = "none";
    }
});

removeBtn.addEventListener("click", (e) => {
    removeFlag = !removeFlag;
})


modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Shift") {
        createTicket(modalPriorityColor, textareaCont.value, shortid());
        modalCont.style.display = "none";
        addFlag = false;
        // isme inner text nhi likhenge balki value likhenge because it is a speacial type of html element
        // textareaCont.innerText="";
        textareaCont.value = "";
    }
});

function createTicket(ticketColor, ticketTask, ticketID) {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML =
        ` <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${ticketID}</div>

        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fas-fa-lock"></i>
        </div>`;

    mainCont.appendChild(ticketCont);

    handleRemoval(ticketCont);
    handleLock(ticketCont);

}

function handleLock(ticket){
    let  ticketLockElem=ticket.querySelector(".ticket-lock");
    let ticketLock=ticketLockElem.children[0];
    ticketLock.addEventListener("click",(e)=>{
      
    });
}

function handleRemoval(ticket) {
    // removeFlag==true? so remove karo
    if (removeFlag) {
        ticket.remove();
    }

}