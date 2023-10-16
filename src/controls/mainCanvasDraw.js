import MainCanvasData from "./mainCanvasData";

export default class MainCanvasDraw {
    #ctx;
    #canvasWidth = 1190;
    #canvasHeight = 1684;
    constructor(ctx) {
        this.#ctx = ctx;
    }

    searchImage(event, targetRef) {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        this.#drawImage(url, targetRef);
    };

    #clearImage() {
        const ctx = this.#ctx;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 170, this.#canvasWidth, this.#canvasHeight);
    }

    #drawImage(url, targetRef) {
        const ctx = this.#ctx;
        const canvasWidth = this.#canvasWidth;
        const canvasHeight = this.#canvasHeight;

        // clearImage를 onload안에 넣는 법을 찾아야함.
        const clearImage = this.#clearImage();

        const image = new Image();
        image.src = url;
        image.onload = function () {
            // clearImage;
            // set image size
            let imageHeight = (canvasHeight - 166) * 96 / 100;
            let imageWidth = image.width * imageHeight / image.height;

            if (imageWidth > canvasWidth * 96 / 100) {
                imageWidth = canvasWidth * 96 / 100;
                imageHeight = image.height * imageWidth / image.width;
            }

            ctx.drawImage(image, (canvasWidth - imageWidth) / 2, (166 + canvasHeight - imageHeight) / 2, imageWidth, imageHeight);
        };
        MainCanvasData.resetImageValue(targetRef);
    }

    drawNum(value) {
        const ctx = this.#ctx;
        ctx.beginPath();
        ctx.fillStyle = '#EAEAEA';
        ctx.roundRect(56, 42, 112, 48, 8);
        ctx.fill();
        ctx.textAlign = 'left';
        ctx.font = 'bold 24px Times';
        ctx.fillStyle = '#000000';
        ctx.fillText('Num : ' + value, 66, 73);
    }

    drawKey(value) {
        const ctx = this.#ctx;
        ctx.beginPath();
        ctx.fillStyle = '#EAEAEA';
        ctx.roundRect(168, 42, 124, 48);
        ctx.fill();
        ctx.textAlign = 'center';
        ctx.font = 'bold 24px Times';
        ctx.fillStyle = '#000000';
        ctx.fillText('Key : ' + value, 235, 73);
    }

    drawTempo(value) {
        const ctx = this.#ctx;
        ctx.beginPath();
        ctx.fillStyle = '#EAEAEA';
        ctx.roundRect(298, 42, 152, 48, 8);
        ctx.fill();
        ctx.textAlign = 'right';
        ctx.font = 'bold 24px Times';
        ctx.fillStyle = '#000000';
        ctx.fillText('Tempo = ' + value, 440, 73);
    }

    #resetMusicData(numRef, keyRef, tempoRef) {
        MainCanvasData.resetNumValue(numRef);
        MainCanvasData.resetKeyValue(keyRef);
        MainCanvasData.resetTempoValue(tempoRef);
    }

    inputInfo() {
        let today = new Date();
        let info = prompt("악보 정보를 입력하세요.", today.toLocaleDateString());
        if (info != null) {
            this.#drawInfo(info);
        }
    }

    #drawInfo(value) {
        const ctx = this.#ctx;
        ctx.fillStyle = 'white';
        ctx.fillRect(800, 40, 1134, 73);
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'right';
        ctx.font = 'bold 20px Arial';
        ctx.fillText(value, 1134, 73);
    }

    drawSongform(listSongform, value) {
        const ctx = this.#ctx;
        listSongform.push(value);
        ctx.fillStyle = 'white';
        ctx.fillRect(200, 120, 900, 40);
        ctx.textAlign = 'center';
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = '#e42e2e';
        ctx.fillText(listSongform.join(" - "), 595, 155);
    }

    eraseSongform(listSongform) {
        const ctx = this.#ctx;
        MainCanvasData.eraseSongform(listSongform);
        ctx.fillStyle = 'white';
        ctx.fillRect(200, 120, 900, 40);
        ctx.textAlign = 'center';
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = '#e42e2e';
        ctx.fillText(listSongform.join(" - "), 595, 155);
    }

    resetSongform(listSongform) {
        const ctx = this.#ctx;
        MainCanvasData.resetSongform(listSongform);
        ctx.fillStyle = 'white';
        ctx.fillRect(200, 120, 900, 40);
        ctx.textAlign = 'center';
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = 'lightgray';
        ctx.fillText("In - A - B - I - A - B - B - C - D - O", 595, 155);
    }

    resetMainCanvas(numRef, keyRef, tempoRef) {
        this.drawImage('/workspaces/Sofo3.0/src/assets/defaultSheet.png');
        this.#resetMusicData(numRef, keyRef, tempoRef);
    }

    get mainCanvas() { }

}