var body = document.body.style
const main = document.querySelector("main").style
const border = document.querySelector("main").style
const boxes = document.querySelectorAll('.box');
const txt = document.querySelectorAll(".deceleration")


function light(){
    dec_txt = "#b87333";
    box_bg = "#645452";
    box_txt = "#dfcdb7"
    body.backgroundColor = "#e8bcb9a3"
    main.backgroundColor = "#dbd7d7"
    border.borderColor = "chocolate"
    changeArray(box_bg,box_txt,dec_txt)
}
function changeArray(box_bg,box_txt,color_txt) {
    boxes.forEach(box => {
        box.style.backgroundColor = `${box_bg}`;
        box.style.color = `${box_txt}`
    })
    txt.forEach(dec => {
        dec.style.color = `${color_txt}`;
    });
}
light()

function dark(){
    dec_txt = "#bfbfbf";
    box_bg = "#2e2e2e";
    box_txt = "#bfbfbf"
    body.backgroundColor = "#333333"
    main.backgroundColor = "#4d4d4d"
    border.borderColor = "#666666"
    changeArray(box_bg,box_txt,dec_txt)
}
function black(){
    dec_txt = "#ffffff";
    box_bg = "#000000";
    box_txt = "#ffffff"
    body.backgroundColor = "#000000"
    main.backgroundColor = "#000000"
    border.borderColor = "#ffffff"
    changeArray(box_bg,box_txt,dec_txt)
}
