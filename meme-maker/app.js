const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option")); //Make HTML collection array to JS array

const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //brush


canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 70;
let isPainting = false;
let isFilling = false;

function onMove(e) {
    if(isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function onMouseDown() {
    isPainting = true;
}

function onMouseUp() {
    isPainting = false;
}

function onLineWidthChange(e) {
    ctx.lineWidth = e.target.value;
}

function onColorChange(e) {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value; //for filling
}

function onColorClick(e) {
    const colorValue = e.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue; //User color select -> changing color selector as well
}

function onModeClick() {
    if(isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill"
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw"
    }
}

function onCanvasClick() {
    if(isFilling) {
        ctx.fillRect(0, 0, 700, 700);
    }
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);