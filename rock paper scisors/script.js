const option = document.getElementsByClassName("select")
const select = document.body.getElementsByTagName("button")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const msg = document.getElementById("msg")
const comp = document.getElementById("comp")
var wc = 0
var wp = 0
var i = ""
var j = ""
paper.addEventListener("click",()=>{
    i=0
    random(i)
})
scissor.addEventListener("click",()=>{
    i=1
    random(i)
})
rock.addEventListener("click",()=>{
    i=2
    random(i)
})
function random(i) {
    let x = Math.ceil(Math.random()*30)
    if(x<=10){
        j=0
        comp.innerHTML = "Computer choose Paper"
    };
    if(x>10 && x<=20){
        j=1
        comp.innerHTML = "Computer choose Scissor"
    }
    if(x>20){
        j=2
        comp.innerHTML = "Computer choose Rock"
    }
    draw(i,j)
}
function draw(i,j){
    if(i==j){
        msg.innerHTML = "Draw"
    }
    else{
        win(i,j)
    }
}
function win(i,j) {
    if(i==0 && j == 2 || i == 1 && j == 0 || i == 2 && j == 1){
        msg.innerHTML = "You win"
        var k=0
        i==""
        j==""
    }
    else{
        msg.innerHTML = "You lose"
        var k = 1
        i==""
        j==""
    }
    adder(k)
}
function adder(k){
    if(k==0){
        wp++
        player.innerHTML = wp
    }
    if(k==1){
        wc++
        computer.innerHTML = wc
    }
}
