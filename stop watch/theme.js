var body = document.body.style
const main = document.querySelector("main").style
const border = document.querySelector("main").style
const boxes = document.querySelectorAll('.box');
const txt = document.querySelectorAll(".deceleration")
const nav = document.querySelector("nav")
const reset_bgc = document.querySelector(".button-reset").style
document.querySelectorAll('input[name="theme"]')[0].addEventListener("change",()=>{light()})
document.querySelectorAll('input[name="theme"]')[1].addEventListener("change",()=>{dark()})
document.querySelectorAll('input[name="theme"]')[2].addEventListener("change",()=>{black()})


function changeArray(box_bg,box_txt,color_txt) {
    boxes.forEach(box => {
        box.style.backgroundColor = `${box_bg}`;
        box.style.color = `${box_txt}`
    })
    txt.forEach(dec => {
        dec.style.color = `${color_txt}`;
    });
}



function light(){
    dec_txt = "#b87333";
    box_bg = "#645452";
    box_txt = "#dfcdb7";
    sidebar.style.backgroundColor = "#6a4f4b"
    nav.style.backgroundColor = "#6a4f4b"
    body.backgroundColor = "#e8bcb9a3";
    main.backgroundColor = "#dbd7d7";
    border.borderColor = "chocolate";
    reset_bgc.backgroundColor = "#ff362b72"
    document.querySelector(".n").children[1].style.color = "#568fa6"
    document.querySelector(".n").children[0].style.backgroundColor = "white"
    document.querySelector(".Stop").style.backgroundColor = "hsla(95, 100%, 58%, 0.594)" ;
    changeArray(box_bg,box_txt,dec_txt);
}

light()
function dark(){
    dec_txt = "#bfbfbf";
    box_bg = "#2e2e2e";
    box_txt = "#bfbfbf"
    sidebar.style.backgroundColor = "#444"
    nav.style.backgroundColor = "#444"
    body.backgroundColor = "#333333"
    main.backgroundColor = "#4d4d4d"
    border.borderColor = "#666666"
    reset_bgc.backgroundColor = "gray"
    document.querySelector(".n").children[0].style.backgroundColor = "gray"
    document.querySelector(".Stop").style.backgroundColor = "gray"
    document.querySelector(".n").children[1].style.color = "white"
    changeArray(box_bg,box_txt,dec_txt)
}
function black(){
    dec_txt = "#ffffff";
    box_bg = "#000000";
    box_txt = "#ffffff"
    sidebar.style.backgroundColor = "#111"
    nav.style.backgroundColor = "#111"
    body.backgroundColor = "#000000"
    main.backgroundColor = "#000000"
    border.borderColor = "#fff"
    reset_bgc.backgroundColor = "black"
    document.querySelector(".n").children[1].style.color = "white"
    document.querySelector(".n").children[0].style.backgroundColor = "black"
    document.querySelector(".n").children[1].style.color = "white"
    document.querySelector(".Stop").style.backgroundColor = "black"
    changeArray(box_bg,box_txt,dec_txt)
}
