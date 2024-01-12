import slideStore from "../stateManage/slideStore";
import defaultSheet from "../assets/defaultSheet.png"
import MainCanvasDraw from "./mainCanvasDraw";
import FlagCanvasDraw from "./flagCanvasDraw";
import SubmitCanvasControl from "./submitCanvasControl"
import canvasStore from "../stateManage/canvasStore"
import FlagCanvasData from "./flagCanvasData";
import RotatedCanvasDraw from "./rotatedCanvasDraw";

export default class SlideControl {
    // Slide Data
    #setListSlide = slideStore((state) => state.setListSlide);
    #setAddListSlide = slideStore((state) => state.setAddListSlide);
    #setDelListSlide = slideStore((state) => state.setDelListSlide);
    #listSlide;

    #nowIndex = slideStore((state) => state.nowIndex);
    #setNowIndex = slideStore((state) => state.setNowIndex);
    #selectIndex = slideStore((state) => state.selectIndex)
    #setSelectIndex = slideStore((state) => state.setSelectIndex);

    #listRotatedSlide = slideStore((state) => state.listRotatedSlide);
    #setListRotatedSlide = slideStore((state) => state.setListRotatedSlide);
    #resetListRotatedSlide = slideStore((state) => state.resetListRotatedSlide);

    // CanvasData
    #ctxMain = canvasStore((state) => state.ctxMain);
    #ctxFlag = canvasStore((state) => state.ctxFlag);
    #ctxSubmit = canvasStore((state) => state.ctxSubmit);
    #ctxRotated = canvasStore((state) => state.ctxRotated);
    #canvasMainRef = canvasStore((state) => state.canvasMainRef);
    #canvasFlagRef = canvasStore((state) => state.canvasFlagRef);
    #canvasSubmitRef = canvasStore((state) => state.canvasSubmitRef);
    #numRef = canvasStore((state) => state.numRef);
    #tempoRef = canvasStore((state) => state.tempoRef);
    #listSongform = canvasStore((state) => state.listSongform);
    #listFlag = canvasStore((state) => state.listFlag);

    #mainCanvasDraw = new MainCanvasDraw(this.#ctxMain);
    #flagCanvasDraw = new FlagCanvasDraw(this.#ctxFlag);
    #submitCanvasControl = new SubmitCanvasControl(this.#ctxSubmit);

    // RotatedCanvasDraw
    #rotatedCanvasDraw = new RotatedCanvasDraw(this.#ctxRotated);


    constructor(listSlide) {
        this.#listSlide = listSlide;
    }


    addSlide() {
        const slides = this.#listSlide;
        const nowId = slides.at(-1).id;
        this.#setAddListSlide({
            id: nowId + 1,
            mainImage: defaultSheet,
            submitImage: defaultSheet,
            num: 1,
            tempo: 110,
            songform: [],
            flagList: [],
            edit: false
        });
    };

    delSlide() {
        if (this.#listSlide.length === 1) {
            alert('더 이상 슬라이드를 삭제할 수 없습니다.');
        } else if (window.confirm('선택된 슬라이드를 삭제하시겠습니까?')) {
            this.#setDelListSlide();
        }
    };

    // del 할 때 id를 재정리하는 함수
    arrangeId() {
        const slides = this.#listSlide;
        for (let i = 0; i < slides.length; i++) {
            slides[i].id = i;
        }

        this.#setListSlide(slides);
    }

    editAddControl(index) {
        const slides = this.#listSlide;
        slides[this.#nowIndex].edit = false;
        slides[index].edit = true;
        this.#setNowIndex(index);
    };

    editDelControl(index) {
        const slides = this.#listSlide;
        slides[index].edit = true;
        this.#setNowIndex(index);
    };

    // slide의 edit 변수를 변경해주는 함수
    #editLoadControl(index) {
        const slides = this.#listSlide;
        slides[this.#nowIndex].edit = false;
        slides[index].edit = true;
        this.#setNowIndex(index);
    };

    async loadSlideToCanvas(index) {
        this.#editLoadControl(index);
        const slide = this.#listSlide[index];
        await this.#mainCanvasDraw.bringMainCanvasData(slide.mainImage, this.#numRef, this.#tempoRef, slide.num, slide.tempo, this.#listSongform, slide.songform);
        this.#mainCanvasDraw.reloadSongform(this.#listSongform);
        FlagCanvasData.bringFlagData(this.#listFlag, slide.flagList);
        this.#flagCanvasDraw.draw(this.#listFlag);
    };

    // Canvas가 Edit 되었을 때 Slide에 내용물이 저장되는 기능
    // save 기능을 어디에 붙여서 실시간으로 작동하게 할지를 고민해야함.
    saveSlide() {
        this.#submitCanvasControl.combineCanvas(this.#canvasMainRef, this.#canvasFlagRef);
        const savedSlide = this.#listSlide[this.#nowIndex];
        savedSlide.mainImage = this.#canvasMainRef.current.toDataURL();
        savedSlide.submitImage = this.#canvasSubmitRef.current.toDataURL();
        savedSlide.num = this.#numRef.current.value;
        savedSlide.tempo = this.#tempoRef.current.value;
        savedSlide.songform = Array.from(this.#listSongform);
        savedSlide.flagList = Array.from(this.#listFlag);
    };

    // RotatedCanvas로 변경 될 때 동작하는 Converter
    async convertRotatedSlide(canvasConvertRef, ctxConvert) {
        const rotatedSlide = [];
        const array = this.#listSlide;
        const arrayLength = parseInt(array.length / 2) + (array.length % 2);

        this.#resetListRotatedSlide();

        for (let i = 0; i < arrayLength; i++) {
            ctxConvert.clearRect(0, 0, 2380, 1684);
            const imageL = await this.#loadImage(array[(2 * i)]);
            ctxConvert.drawImage(imageL, 0, 0);
            if (!Boolean(array.length % 2) || i != (arrayLength - 1)) {
                const imageR = await this.#loadImage(array[(2 * i + 1)]);
                ctxConvert.drawImage(imageR, 1190, 0);
            }
            const imageRotated = await this.#loadImageRotated(canvasConvertRef.current.toDataURL());
            rotatedSlide.push({
                id: rotatedSlide.length,
                rotatedImage: imageRotated.src,
                select: false,
            })
        }
        this.#setListRotatedSlide(rotatedSlide);
    }

    async #loadImage(url) {
        let img = new Image();
        img.src = url.submitImage;

        const promise = new Promise((resolve) => {
            img.onload = resolve;
        });

        await promise;
        return img;
    }

    async #loadImageRotated(url) {
        let img = new Image();
        img.src = url;

        const promise = new Promise((resolve) => {
            img.onload = resolve;
        });

        await promise;
        return img;
    }

    #selectControl(index) {
        const slides = this.#listRotatedSlide;
        slides[this.#selectIndex].select = false;
        slides[index].select = true;
        this.#setSelectIndex(index);
    };

    loadRotatedSlideToCanvas(index) {
        this.#selectControl(index);
        const url = this.#listRotatedSlide[index].rotatedImage;
        this.#ctxRotated.clearRect(0, 0, 2380, 1684);
        this.#rotatedCanvasDraw.drawRotatedCanvas(url)
    };
}