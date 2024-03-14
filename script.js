let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newb = document.querySelector("#newb");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const win = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "purple";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = "Game Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulations, The Winner is ${winner} !`;
    msgContainer.classList.remove("hide");
   disableBoxes();
}

const checkWinner = () => {
    for(let pattern of win){
        let first = boxes[pattern[0]].innerText;
        let second = boxes[pattern[1]].innerText;
        let third = boxes[pattern[2]].innerText;
        if(first != "" && second != "" && third != ""){
            if(first === second && second === third){
                showWinner(first);
            }
        }
    }
};
newb.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


