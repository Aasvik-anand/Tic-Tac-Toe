let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg")

let turnO = true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
             //turn of playerO
            box.innerText = "O";
            box.style.color = "#02029d"
            turnO= false;
        }else{
             //turn of playerX
            box.innerText= " X ";
            box.style.color = "#a71b16"
            turnO = true;
        }
        box.disabled= true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}; 

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled= true;
    }}
    
const enableBoxes = () => {
        for(let box of boxes){
            box.disabled= false;
            box.innerText = "";
        }}


const showWinner = (winner) =>{
    msg.innerText= `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
for (let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            return true;
        }
    }
}};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);