let boxes = document.querySelectorAll(".block");
let resetbtn = document.querySelector(".resetbtn");
let newGameBtn= document.querySelector(".newgamebtn");
let winnermsg= document.querySelector(".winnermsg");
let msg= document.querySelector(".msg");
let content= document.querySelector(".content");
let drawmsg= document.querySelector(".drawmsg");
let newGameBtnDraw= document.querySelector(".newgamebtndraw");

let status= "cross";

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count = 0;

const showWinner = (winner) => {
    count=0;
    msg.innerText = `Winner is ${winner}`;
    winnermsg.classList.remove("hide");
}


const showDraw = () => {
    count=0;
    drawmsg.classList.remove("hide");
    content.classList.add("hide");
}

const disableBoxes= () => {
    for(let box of boxes){
        box.disabled= true;
    }
}

const hideContent = () => {
    content.classList.add("hide");
}

const showContent = () => {
    content.classList.remove("hide");
}

const resetGamedraw = () => {
    status= "cross";
    for(let box of boxes){
        if(box.innerText === "X"){
            box.classList.remove("x-style");
        } else {
            if(box.innerText === "O"){
                box.classList.remove("o-style");
            }
        }
        box.innerText = "";
        box.disabled = false;
        drawmsg.classList.add("hide");
        showContent();
    }
};

newGameBtnDraw.addEventListener("click", resetGamedraw);


const resetGame= () => {
    status= "cross";
    for(let box of boxes){
        if(box.innerText === "X"){
            box.classList.remove("x-style");
        } else {
            if(box.innerText === "O"){
                box.classList.remove("o-style");
            }
        }
        box.innerText = "";
        box.disabled = false;
        winnermsg.classList.add("hide");
        showContent();

    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        if(status === "cross"){
            box.innerText="X";
            status = "circle";
            box.classList.add("x-style");
            count++;
        } else {
            box.innerText="O";
            status = "cross";
            box.classList.add("o-style");
            count++;
        }

        box.disabled = true;
        
        checkWinner();
    })
});




const checkWinner = () => {

    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos1Val === pos3Val && pos2Val === pos3Val){

                showWinner(pos1Val);
                disableBoxes();
                hideContent();
            } else {
                if(count === 9){
                    showDraw();
                }
            }
        }
    }
}







