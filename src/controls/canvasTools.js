// Slidebox
const listSlide = [{
    id: 0,
    mainImage: '',
    submitImage: '../Sofo/Assets/defaultSheet.png',
    flagList: [],
    edit: true
}];
addSlideElement(0);

function controlSlide(id) {
    saveSlide();

    if (String(id) == 'addSlide') {
        addNewSlide();
        showSlide();
        startForm();
    } else {
        bringSlide(id);
        reloadSlide();
    }
}

function addNewSlide() {
    listSlide.push({
        id: listSlide.length,
        mainImage: '',
        submitImage: '../Sofo/Assets/defaultSheet.png',
        flagList: [],
        edit: true
    });
}

// 여기에 있는 Slide 제거 후 다시 보여주는 기능을 React를 활용하여 더 효율적인 방법으로 수정할 것임.
// showSlide 와 reloadSlide 2가지 기능을 연결할 때 고려해야함.

function showSlide() {
    // 기존의 slide를 제거
    for (let i = 1; i < listSlide.length; i++) {
        const slides = document.querySelector('.slide');
        slides.remove();
    }

    // listSlide에 있는 slide들을 표기
    for (let i = 0; i < listSlide.length; i++) {
        addSlideElement(i);
    }
}

function reloadSlide() {
    // 기존의 slide를 제거
    for (let i = 0; i < listSlide.length; i++) {
        const slides = document.querySelector('.slide');
        slides.remove();
    }

    // listSlide에 있는 slide들을 표기
    for (let i = 0; i < listSlide.length; i++) {
        addSlideElement(i);
    }
}

function addSlideElement(i) {
    const slide = new Image;
    slide.src = listSlide[i].submitImage;
    if (listSlide[i].edit) {
        slide.style = 'border: 2px solid #6C6C6C;';
    } else {
        slide.style = 'border: 2px solid #D2BDAB;';
    }
    slide.id = i;
    slide.className = 'slide';
    slide.setAttribute('onclick', 'controlSlide(id)');
    document.querySelector('#slidebox').appendChild(slide);
}

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