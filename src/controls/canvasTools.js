function saveSlide() {
    for (let i = 0; i < listSlide.length; i++) {
        if (listSlide[i].edit) {
            combineCanvas();
            const s = listSlide[i];
            s.mainImage = canvas.toDataURL();
            s.submitImage = canvasSubmit.toDataURL();
            s.flagList = Array.from(flags);
            s.edit = false;
        }
    }
}

function bringSlide(i) {
    const s = listSlide[i];
    s.edit = true;
    const image = new Image();
    image.src = s.mainImage;
    image.onload = function () {
        resetFlag();
        resetInfoMusic();
        resetSonform();
        ctx.drawImage(image, 0, 0);
        flags = Array.from(s.flagList);
        draw();
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


// download
function btn_save() {
    combineCanvas();
    const url = canvasSubmit.toDataURL();
    const Fullscreen = document.querySelector("#canvasFullscreen");
    Fullscreen.src = url;
    const a = document.createElement("a");
    a.href = url;
    a.download = "Sofo_Score.png";
    a.click();
    document.body.removeChild(a);
}