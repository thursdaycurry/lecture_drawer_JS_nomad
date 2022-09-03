const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn")
const colorOptions = Array.from(document.getElementsByClassName("color-option")); //Make HTML collection array to JS array
const eraserBtn = document.getElementById("eraser-btn");

const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //brush

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;

canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 70;
let isPainting = false;
let isFilling = false;

/** onMove works whenever your mouse moved */
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
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function onDestroyClick() {
    ctx.fillStyle="white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

function onFileChange(e) {
    console.dir(e.target);
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    
    // Smae as <img src=""/>
    const image = new Image();
    image.src = url;
    image.onload = function() {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null; //reset uploaded file
    };
}

function onDoubleClick(e) {
    const text = textInput.value;
    if (text !== "") {
        ctx.save(); // current state is saved and can be restored later. In this cas just for lineWidth
        ctx.lineWidth = 1;
        ctx.font = "48px serif";
        // ctx.strokeText(text, e.offsetX, e.offsetY);
        ctx.fillText(text, e.offsetX, e.offsetY);
        ctx.restore();
    }
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);