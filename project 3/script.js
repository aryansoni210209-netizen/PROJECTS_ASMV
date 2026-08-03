let screenContent = document.querySelector(".screen-content");
let digits = document.querySelectorAll(".dig");
let clearBtn = document.querySelector(".clear");
let operators = document.querySelectorAll(".opr");
let enter = document.querySelector(".enter");

let currVal = 0;
let pre;
let post;
let ans;
let oprVal;
let oprClk = false;
screenContent.innerHTML = currVal;

let calculate = (oprVal) => {
    post = currVal;
    if(oprVal === "+"){
        ans = pre + post;
    }else if(oprVal === "-"){
        ans = pre - post;
    }else if(oprVal === "*"){
        ans = pre * post;
    }else if(oprVal === "/"){
        ans = pre / post;
    }
    console.log(ans);
    return ans;
}

operators.forEach((opr) => {
    opr.addEventListener("click" , () => {
        oprVal = opr.innerHTML;
        console.log("the operator is " , oprVal);
        screenContent.innerHTML = oprVal;
        pre = currVal;
        console.log("the 1st previous valuev is " , pre); 
        currVal = 0; 
        console.log("the 2nd current value is now " , currVal);
        calculate(oprVal);
    })
    
})


digits.forEach((dig) => {
    dig.addEventListener("click" , () => {
        let digVal = parseInt(dig.innerHTML);
        currVal = (currVal * 10 ) + digVal;
        console.log("the current value afer 1st input is " , currVal);
        screenContent.innerHTML = currVal;
    })
    
});

clearBtn.addEventListener("click" , () => {
    screenContent.innerHTML = 0;
    currVal = 0;
})

enter.addEventListener("click" , () => {
    currVal = calculate(oprVal);
    screenContent.innerHTML = currVal;
}
)

// let calculate = (oprVal) => {
// enter.addEventListener("click" , () => {
//     post = currVal;
//     console.log("the 1st post val is " , post);
//     if(oprVal === "+"){
//         ans = pre + post;
//     }else if(oprVal === "-"){
//         ans = pre - post;
//     }else if(oprVal === "*"){
//         ans = pre * post;
//     }else if(oprVal === "/"){
//         ans = pre / post;
//     }
//     currVal = ans;
//     console.log("the 3rd current value is now " , currVal);
//     screenContent.innerHTML = ans;
//     console.log("the ans is " , ans);
// })}


