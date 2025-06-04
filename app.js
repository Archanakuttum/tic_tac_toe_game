let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winpattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
            box.disabled =true;
        }
        else{
            box.innerText = "X";
            turnO =true;
            box.disabled = true;
        }
        checkwinner();
    });
});
const resetgame = () =>{
    turnO =true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
const disabledboxes =() =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enabledboxes =() =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner =(winner) =>{
    msg.innerText = `congratulations, ${winner} is the Winner !`;
    msgcontainer.classList.remove("hide");
     disabledboxes();
};

const checkwinner = () =>{
    for ( let   pattern of winpattern){
        let pos1V= boxes[pattern[0]].innerText;
        let pos2V= boxes[pattern[1]].innerText;
        let pos3V= boxes[pattern[2]].innerText;
        if(pos1V !="" && pos2V!="" && pos3V !="")
        {
            if(pos1V === pos2V && pos2V === pos3V)
            {
                console.log("winner",pos1V);
                showwinner(pos1V);
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);