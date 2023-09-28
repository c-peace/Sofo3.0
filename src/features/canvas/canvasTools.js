const canvas = document.getElementById('canvasMain');
const ctx = canvas.getContext('2d');
canvas.width = 1190;
canvas.height = 1684;

const imageInput = document.getElementById('upload');

function startForm() {
    const image = new Image();
    image.src = '../Sofo/Assets/defaultSheet.png';
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
        resetFlag();
        resetInfoMusic();
        resetSonform();
        saveSheet();
    }
}
startForm();

// canvasbtn
const canvasBox = document.querySelector('#canvasBox');
canvasBox.addEventListener('click', () => {
    saveSheet();
});

const songform = document.getElementById('songform');
const flag = document.getElementById('flag');
const RTguideBox = document.getElementById('RTguideBox');
flag.addEventListener('mouseover', () => {
    RTguideBox.style = "bottom: calc(80 / 969 * 100vh); display: block;"
});
flag.addEventListener('mouseout', () => {
    RTguideBox.style = "display: none;"
});
songform.addEventListener('mouseover', () => {
    RTguideBox.style = "top: calc(60 / 969 * 100vh); display: block;"
});
songform.addEventListener('mouseout', () => {
    RTguideBox.style = "display: none;"
});

const imgBtn = document.getElementById('image');
const IMGguideBox = document.getElementById('IMGguideBox');
imgBtn.addEventListener('mouseover', () => {
    IMGguideBox.style = "bottom: calc(80 / 969 * 100vh); display: block;"
});
imgBtn.addEventListener('mouseout', () => {
    IMGguideBox.style = "display: none;"
});

// Info Music
function drawInfoNum(value) {
    ctx.beginPath();
    ctx.fillStyle = '#EAEAEA';
    ctx.roundRect(56, 42, 112, 48, 8);
    ctx.fill();
    ctx.textAlign = 'left';
    ctx.font = 'bold 24px Times';
    ctx.fillStyle = '#000000';
    ctx.fillText('Num : ' + value, 66, 73);
}

function drawInfoKey(value) {
    ctx.beginPath();
    ctx.fillStyle = '#EAEAEA';
    ctx.roundRect(168, 42, 124, 48);
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.font = 'bold 24px Times';
    ctx.fillStyle = '#000000';
    ctx.fillText('Key : ' + value, 235, 73);
}

function drawInfoTempo(value) {
    ctx.beginPath();
    ctx.fillStyle = '#EAEAEA';
    ctx.roundRect(298, 42, 152, 48, 8);
    ctx.fill();
    ctx.textAlign = 'right';
    ctx.font = 'bold 24px Times';
    ctx.fillStyle = '#000000';
    ctx.fillText('Tempo = ' + value, 440, 73);
}

function resetInfoMusic() {
    document.getElementById('info_num').value = 1;
    document.getElementById('info_key').value = 'C';
    document.getElementById('info_tempo').value = 110;
}

// Info Sheet
function drawInfoSheet(value) {
    ctx.fillStyle = 'white';
    ctx.fillRect(800, 40, 1134, 73);
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'right';
    ctx.font = 'bold 20px Arial';
    ctx.fillText(value, 1134, 73);
}

function inputInfoSheet() {
    let today = new Date();
    let info = prompt("악보 정보를 입력하세요.", today.toLocaleDateString());
    if (info != null) {
        drawInfoSheet(info);
    }

}

// Songform
list_Songform = []
function drawSongform(value) {
    list_Songform.push(value);
    ctx.fillStyle = 'white';
    ctx.fillRect(200, 120, 900, 40);
    ctx.textAlign = 'center';
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = '#e42e2e';
    ctx.fillText(list_Songform.join(" - "), 595, 155);
}

function resetSonform() {
    list_Songform.length = 0;
    ctx.fillStyle = 'white';
    ctx.fillRect(200, 120, 900, 40);
    ctx.textAlign = 'center';
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = 'lightgray';
    ctx.fillText("In - A - B - I - A - B - B - C - D - O", 595, 155);
}

function eraseSongform() {
    list_Songform.pop();
    ctx.fillStyle = 'white';
    ctx.fillRect(200, 120, 900, 40);
    ctx.textAlign = 'center';
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = '#e42e2e';
    ctx.fillText(list_Songform.join(" - "), 595, 155);
}


// load Music Score
function SearchImage(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    loadImage(url);
};

function loadImage(url) {
    const image = new Image();
    image.src = url;
    image.onload = function () {
        clearImage();
        // set image size
        let imageHeight = (canvas.height - 166) * 96 / 100;
        let imageWidth = image.width * imageHeight / image.height;

        if (imageWidth > canvas.width * 96 / 100) {
            imageWidth = canvas.width * 96 / 100;
            imageHeight = image.height * imageWidth / image.width;
        }

        ctx.drawImage(image, (canvas.width - imageWidth) / 2, (166 + canvas.height - imageHeight) / 2, imageWidth, imageHeight);
        saveSheet();
    };
    imageInput.value = '';
}

function clearImage() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 170, canvas.width, canvas.height)
}

imageInput.addEventListener('change', SearchImage);


// Draw Flag
const canvasFlag = document.getElementById("canvasFlag");
const ctxFlag = canvasFlag.getContext('2d');
canvasFlag.width = 1190;
canvasFlag.height = 1684;
canvasFlag.backScreen = 'transparent';

let dragok = false;
let startX;
let startY;

canvasFlag.addEventListener('mousedown', myDown);
canvasFlag.addEventListener('mouseup', myUp);
canvasFlag.addEventListener('mousemove', myMove);

let flags = [];

function resetFlag() {
    clearCanvasFlag();
    flags.length = 0;
}

function eraseFlag() {
    clearCanvasFlag();
    flags.pop();
    draw();
}

function clearCanvasFlag() {
    ctxFlag.clearRect(0, 0, canvasFlag.width, canvasFlag.height);
}

function createFlag(name) {
    flags.push({
        x: Math.floor(Math.random() * 951) + 120,
        y: Math.floor(Math.random() * 100) + 1500,
        width: 50,
        height: 50,
        strokeStyle: "red",
        fillStyle: "white",
        name: name,
        isDragging: false
    });
    draw();
    document.querySelector('#flag').value = 'flag';
}

function rect(r) {
    ctxFlag.save();
    ctxFlag.beginPath();
    // inner fill
    ctxFlag.fillStyle = r.fillStyle;
    ctxFlag.fillRect(r.x, r.y, r.width, r.height);
    // outline
    ctxFlag.lineWidth = 3;
    ctxFlag.strokeRect(r.x, r.y, r.width, r.height);
    // text
    ctxFlag.textAlign = 'center';
    ctxFlag.fillStyle = r.strokeStyle;
    ctxFlag.font = '37px Arial';
    ctxFlag.fillText(r.name, r.x + 25, r.y + 39);
    ctxFlag.restore();
}

function draw() {
    clearCanvasFlag();
    for (let i = 0; i < flags.length; i++) {
        rect(flags[i]);
    }
}

// handle mousedown events
function myDown(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    const mx = (e.offsetX / ((window.innerHeight * 93 / 100) / 842 * 595)) * canvasFlag.width;
    const my = (e.offsetY / (window.innerHeight * 93 / 100)) * canvasFlag.height;

    // test each shape to see if mouse is inside
    dragok = false;
    for (let i = flags.length - 1; i >= 0; i--) {
        let s = flags[i];

        if (
            !dragok &&
            mx > s.x &&
            mx < s.x + s.width &&
            my > s.y &&
            my < s.y + s.height
        ) {
            // if yes, set that rects isDragging=true
            dragok = true;
            s.isDragging = true;
        }
    }
    // save the current mouse position
    startX = mx;
    startY = my;
}

// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    dragok = false;
    for (let i = 0; i < flags.length; i++) {
        flags[i].isDragging = false;
    }
}

// handle mouse moves
function myMove(e) {
    // if we're dragging anything...
    if (dragok) {
        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        const mx = (e.offsetX / ((window.innerHeight * 93 / 100) / 842 * 595)) * canvasFlag.width;
        const my = (e.offsetY / (window.innerHeight * 93 / 100)) * canvasFlag.height;

        // calculate the distance the mouse has moved
        // since the last mousemove
        const dx = mx - startX;
        const dy = my - startY;

        // move each rect that isDragging
        // by the distance the mouse has moved
        // since the last mousemove
        for (let i = 0; i < flags.length; i++) {
            const s = flags[i];
            if (s.isDragging) {
                s.x += dx;
                s.y += dy;
            }
        }

        // redraw the scene with the new rect positions
        draw();

        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;
    }
}


// AREA --- canvasSubmit ---
const canvasSubmit = document.getElementById('canvasSubmit');
ctxSubmit = canvasSubmit.getContext('2d')
canvasSubmit.width = 1190;
canvasSubmit.height = 1684;

// Combine Canvas
function combineCanvas() {
    ctxSubmit.drawImage(canvas, 0, 0);
    ctxSubmit.drawImage(canvasFlag, 0, 0);
}
