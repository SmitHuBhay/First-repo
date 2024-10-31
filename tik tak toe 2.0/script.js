let boxes = document.querySelectorAll(".box")
let new_game = document.querySelector(".new")
let rst_game = document.querySelector(".reset")
let msg = document.querySelector(".message")
var i = 0

let WinPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var player1 = true
boxes.forEach(((box)=>{
    box.addEventListener('click',()=>{
        i+=1
        box.classList.add("border")
        box.classList.add("shadow")
        if(player1){
            box.innerHTML = "O"
            player1 = false
            box.disabled = true
        }
        else{
            box.innerHTML = "X"
            player1 = true
            box.disabled = true
        }
        if(i==9){
            reset()
        }
        else{
            
        }
        win()
    })
}))
function win(){
    for(let combo of WinPattern){
        let var1 = boxes[combo[0]].innerHTML
        let var2 = boxes[combo[1]].innerHTML
        let var3 = boxes[combo[2]].innerHTML
        if(var1!="" && var2!="" && var3!="")
            if(var1===var2 && var2===var3){
                // message(win)
                console.log(`${var1} wins`)
                boxes.forEach(box=>{
                    box.disabled=true
                })
            }
        else{
            continue
        }
    }
}
// function message(a){
//     if(a===win){
//         msg.innerHTML = `${var1} is the winner`
//     }
// }
// colour changing text
function randomcolour(){
    let a = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    let c = Math.ceil(Math.random()*255);
    return `rgb(${a},${b},${c})`
}
// setInterval((() => {
//     msg.style.color= randomcolour()
//     }), 400);
// reset game

rst_game.addEventListener("click",reset()
)
function reset(){
    boxes.forEach(box=>{
        box.innerHTML=""
        box.classList.remove("border")
        box.classList.remove("shadow")
        box.disabled = false
        player1 = true
        i = 0
    })}
 
// new game

new_game.addEventListener("click",newgame())
function newgame(){
    
}
