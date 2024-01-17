import MainCanvasData from "./mainCanvasData";
import defaultSheet from "../assets/defaultSheet.png";
import canvasStore from "../stateManage/canvasStore";
import slideStore from "../stateManage/slideStore";

export default class MainCanvasDraw {
    #ctx;
    #canvasWidth = 1190;
    #canvasHeight = 1684;

    #isColorApplied = canvasStore((state) => state.isColorApplied);
    #isTypeApplied = canvasStore((state) => state.isTypeApplied);
    #setChangeSaveSlide = slideStore((state) => state.setChangeSaveSlide);

    constructor(ctx) {
        this.#ctx = ctx;
    }

    static defaultSet(ctx, listSlide, nowIndex, numRef, tempoRef) {
        const slide = listSlide[nowIndex];
        const image = new Image();
        image.src = slide.mainImage;
        image.onload = function () {
            ctx.drawImage(image, 0, 0);
        }

        MainCanvasData.bringNumValue(numRef, slide.num);
        MainCanvasData.bringTempoValue(tempoRef, slide.tempo);
    }

    async drawCanvas(url) {
        const ctx = this.#ctx;
        const image = await this.#loadMainImage(url);
        ctx.drawImage(image, 0, 0);

        this.#setChangeSaveSlide();
    }

    async #loadCanvas(url) {
        const ctx = this.#ctx;
        const mainImage = await this.#loadMainImage(url);
        ctx.drawImage(mainImage, 0, 0);
    }

    async #loadMainImage(url) {
        let img = new Image();
        img.src = url;

        const promise = new Promise((resolve) => {
            img.onload = resolve;
        });

        await promise;
        return img;
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

    async #drawImage(url, targetRef) {
        const ctx = this.#ctx;

        const image = await this.#loadDrawImage(url);
        // set image size
        let imageHeight = (this.#canvasHeight - 166) * 96 / 100;
        let imageWidth = image.width * imageHeight / image.height;

        if (imageWidth > this.#canvasWidth * 96 / 100) {
            imageWidth = this.#canvasWidth * 96 / 100;
            imageHeight = image.height * imageWidth / image.width;
        }

        this.#clearImage();
        ctx.drawImage(image, (this.#canvasWidth - imageWidth) / 2, (166 + this.#canvasHeight - imageHeight) / 2, imageWidth, imageHeight);

        MainCanvasData.resetImageValue(targetRef);
        this.#setChangeSaveSlide();
    }

    async #loadDrawImage(url) {
        let img = new Image();
        img.src = url;

        const promise = new Promise((resolve) => {
            img.onload = resolve;
        });

        await promise;
        return img;
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
        ctx.roundRect(168, 42, 130, 48, 8);
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

    #resetMusicData(numRef, tempoRef) {
        MainCanvasData.resetNumValue(numRef);
        MainCanvasData.resetTempoValue(tempoRef);
    }

    #bringMusicData(numRef, tempoRef, numValue, tempoValue, listSongform, songformValue) {
        MainCanvasData.bringNumValue(numRef, numValue);
        MainCanvasData.bringTempoValue(tempoRef, tempoValue);
        MainCanvasData.bringSongformValue(listSongform, songformValue);
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
        this.#songformEngine(listSongform);
    }

    reloadSongform(listSongform) {
        if (listSongform.length !== 0) {
            const ctx = this.#ctx;
            ctx.fillStyle = 'white';
            ctx.fillRect(200, 120, 900, 40);
            ctx.textAlign = 'center';
            ctx.font = 'bold 28px Arial';
            this.#songformEngine(listSongform);
        };
    }

    #songformEngine(listSongform) {
        const ctx = this.#ctx;
        let startX = 620;

        for (let i = 0; i < listSongform.length; i++) {
            let element = listSongform[i];

            if (this.#isColorApplied) {
                ctx.fillStyle = this.#songformColorEngine(element);
            } else {
                ctx.fillStyle = 'red';
            }

            if (this.#isTypeApplied) {
                element = this.#songformTypeEngine(element);
            }

            ctx.fillText(element, (startX - 40 * listSongform.length / 2) + 40 * i, 155);
        }
    }

    #songformColorEngine(element) {
        switch (element) {
            case 'In':
                return 'red'; // Red Color

            case 'A':
                return 'orange'; // Orange Color

            case 'B':
                return 'green'; // Green Color

            case 'I':
                return 'red'; // Red Color

            case 'C':
                return 'blue'; // Blue Color

            case 'D':
                return 'purple'; // Puple Color

            case 'O':
                return 'red'; // Red Color

            default:
                alert("Error(mainCanvasDraw, 163): element is not defined");
                break;
        };
    }

    #songformTypeEngine(element) {
        switch (element) {
            case 'In':
                return 'In'; // Red Color

            case 'A':
                return 'V'; // Orange Color

            case 'B':
                return 'P'; // Green Color

            case 'I':
                return 'I'; // Red Color

            case 'C':
                return 'C'; // Blue Color

            case 'D':
                return 'B'; // Puple Color

            case 'O':
                return 'O'; // Red Color

            default:
                alert("Error(mainCanvasDraw, 163): element is not defined");
                break;
        };
    }

    eraseSongform(listSongform) {
        const ctx = this.#ctx;
        MainCanvasData.eraseSongform(listSongform);
        ctx.fillStyle = 'white';
        ctx.fillRect(200, 120, 900, 40);
        ctx.textAlign = 'center';
        ctx.font = 'bold 28px Arial';
        this.#songformEngine(listSongform);
    }

    #resetSongform(listSongform) {
        const ctx = this.#ctx;
        MainCanvasData.resetSongform(listSongform);
        ctx.fillStyle = 'white';
        ctx.fillRect(200, 120, 900, 40);
        ctx.textAlign = 'center';
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = 'lightgray';
        ctx.fillText("In - A - B - I - A - B - B - C - D - O", 595, 155);
    }

    resetMainCanvasData(numRef, tempoRef, listSongform) {
        this.drawCanvas(defaultSheet);
        this.#resetMusicData(numRef, tempoRef);
        this.#resetSongform(listSongform);
    }

    async bringMainCanvasData(mainImage, numRef, tempoRef, numValue, tempoValue, listSongform, songformValue) {
        await this.#loadCanvas(mainImage);
        this.#bringMusicData(numRef, tempoRef, numValue, tempoValue, listSongform, songformValue);
    }
}