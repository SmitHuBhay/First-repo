const boxes = document.querySelectorAll(".box")
const win = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
const e = document.querySelectorAll(".win-msg")
const win_window = document.querySelector(".winner")
const button1 = document.querySelector(".button")
const button2 = document.querySelectorAll(".button")[1]
var win_msg = document.querySelector(".win-msg")
button1.addEventListener("click",()=>{
    window.location.reload();
})
button2.addEventListener("click",()=>{
    window.location.reload();
})


let p1 = true
function randomcolour(){
    let a = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    let c = Math.ceil(Math.random()*255);
    return `rgb(${a},${b},${c})`
}
setInterval(() => {
    Array.from(e).forEach((x)=>{
        x.style.backgroundColor = randomcolour()
        x.style.color= randomcolour()
    })}, 400);


boxes.forEach((box=>{
    box.addEventListener("click",()=>{
        if(p1==true){
            box.innerHTML="O"
            p1=false
            box.classList.add("shadow")
        }
        else{
            box.innerHTML="X"
            p1=true
            box.classList.add("shadow")
        }
        box.disabled = true
        winco()
    })
}))
function winco(){
    for(let pt of win){
        let val1=boxes[pt[0]].innerHTML
        let val2=boxes[pt[1]].innerHTML
        let val3=boxes[pt[2]].innerHTML 
        // console.log(pt[0],pt[1],pt[2])
        // console.log(boxes[pt[0]].innerHTML,boxes[pt[1]].innerHTML,boxes[pt[2]].innerHTML);
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                win_window.classList.remove("hide")
                win_msg.innerHTML=`${val1} is winner`
                der()
            }
        }
    }
}
function der(){
    for(let box of boxes){
        box.disabled=true
    }
}