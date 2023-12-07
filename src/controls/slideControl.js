import slideStore from "../stateManage/slideStore";
import defaultSheet from "../assets/defaultSheet.png"
import MainCanvasDraw from "./mainCanvasDraw";
import FlagCanvasDraw from "./flagCanvasDraw";
import SubmitCanvasControl from "./submitCanvasControl"
import canvasStore from "../stateManage/canvasStore"
import FlagCanvasData from "./flagCanvasData";

export default class SlideControl {
    // Slide Data
    #setAddListSlide = slideStore((state) => state.setAddListSlide);
    #setDelListSlide = slideStore((state) => state.setDelListSlide);
    #listSlide;
    #nowIndex = slideStore((state) => state.nowIndex);
    #setNowIndex = slideStore((state) => state.setNowIndex);

    // CanvasData
    #ctxMain = canvasStore((state) => state.ctxMain);
    #ctxFlag = canvasStore((state) => state.ctxFlag);
    #ctxSubmit = canvasStore((state) => state.ctxSubmit);
    #canvasMainRef = canvasStore((state) => state.canvasMainRef);
    #canvasFlagRef = canvasStore((state) => state.canvasFlagRef);
    #canvasSubmitRef = canvasStore((state) => state.canvasSubmitRef);
    #numRef = canvasStore((state) => state.numRef);
    #tempoRef = canvasStore((state) => state.tempoRef);
    #listSongform = canvasStore((state) => state.listSongform);
    #listFlag = canvasStore((state) => state.listFlag);
    #setListFlag = canvasStore((state) => state.setListFlag);

    #mainCanvasDraw = new MainCanvasDraw(this.#ctxMain);
    #flagCanvasDraw = new FlagCanvasDraw(this.#ctxFlag);
    #submitCanvasControl = new SubmitCanvasControl(this.#ctxSubmit);


    constructor(listSlide) {
        this.#listSlide = listSlide;
    }

    addSlide() {
        this.#setAddListSlide({
            id: this.#listSlide.length,
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
        } else if (this.#listSlide.length === this.#nowIndex + 1) {
            alert('선택되어 있는 슬라이드는 삭제할 수 없습니다.');
        } else {
            this.#setDelListSlide();
        }
    };

    // slide의 edit 변수를 변경해주는 함수
    #editControl(index) {
        const slides = this.#listSlide;
        slides[this.#nowIndex].edit = false;
        slides[index].edit = true;
        this.#setNowIndex(index);
    };

    loadSlideToCanvas(index) {
        this.#editControl(index);
        const slide = this.#listSlide[index];
        this.#mainCanvasDraw.bringMainCanvasData(slide.mainImage, this.#numRef, this.#tempoRef, slide.num, slide.tempo, this.#listSongform, slide.songform);
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
}