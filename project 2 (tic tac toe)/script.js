let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".win-container");
let message = document.querySelector(".win-msg");

let turnO = true;
let re = false;

const winPositions = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

let resetGame = (val) => {
    val.innerText = "";
}

boxes.forEach(box => {
    box.addEventListener("click" , () => {
        console.log("butten was clicked")
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        if(re){
            box.innerText = null;
            re = false;
        }
        box.disabled = true;
        chekWinner();
        
    })
});

let chekWinner = () => {
    for(let position of winPositions){
    let val1 = boxes[position[0]].innerText;
    let val2 = boxes[position[1]].innerText;
    let val3 = boxes[position[2]].innerText;
    
    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
            console.log("winner is " , val1)
            msgContainer.classList.remove("hide");
            message.innerText = `winner is ${val2}`;
            
        }
    }
}
}

reset.addEventListener("click" , () => {
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
})


