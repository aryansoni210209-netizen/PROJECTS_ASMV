let buttens = document.querySelectorAll(".btn");
let inbtns = document.querySelectorAll(".inbtn");


let clkd = true;
let inClkd = true;

let control = {
    home : document.querySelector(".homeScr"),
    taskManager : document.querySelector(".taskScr"),
    command : document.querySelector(".commandScr"),
    addTask : document.querySelector(".addScr"),
    login : document.querySelector(".loginScr"),
}

let innerControl = {
    inLogin : document.querySelector(".innerLogin") ,
    signUp : document.querySelector(".signUpScr") ,
    signIn : document.querySelector(".signInScr") ,
}
 


buttens.forEach((btn) => {
    btn.addEventListener("click" , () => {
        id = btn.getAttribute("id");
        currScr = control[id];
        if(clkd){
            currScr.classList.remove("hide");
            preScr = currScr;
            clkd = false;
        }else{
            if(preScr === currScr){
                currScr.classList.add("hide");
                clkd = true;
            }else{
                preScr.classList.add("hide");
                currScr.classList.remove("hide");
                preScr = currScr;
            }
        }
    })
})

inbtns.forEach((inbtn) => {
    inbtn.addEventListener("click" , () => {
        console.log("butten was clicked");
        id = inbtn.getAttribute("id");
        curr = innerControl[id];
        if(inClkd){
            curr.classList.remove("hide");
            innerControl["inLogin"].classList.add("hide");
            pre = curr;
            inClkd = false;
        }else{
            if(pre === curr){
                curr.classList.add("hide");
                inClkd = true;
            }else{
                pre.classList.add("hide");
                curr.classList.remove("hide");
                pre = curr;
            }
        }
    })
})