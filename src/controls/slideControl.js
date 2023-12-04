import slideStore from "../stateManage/slideStore";
import defaultSheet from "../assets/defaultSheet.png"
import MainCanvasDraw from "./mainCanvasDraw";
import FlagCanvasDraw from "./flagCanvasDraw";
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
    #numRef = canvasStore((state) => state.numRef);
    #tempoRef = canvasStore((state) => state.tempoRef);
    #listSongform = canvasStore((state) => state.listSongform);
    #listFlag = canvasStore((state) => state.listFlag);
    #setListFlag = canvasStore((state) => state.setListFlag);

    #mainCanvasDraw = new MainCanvasDraw(this.#ctxMain);
    #flagCanvasDraw = new FlagCanvasDraw(this.#ctxFlag);


    constructor(listSlide) {
        this.#listSlide = listSlide;
    }

    addSlide() {
        this.#setAddListSlide({
            id: this.#listSlide.length,
            mainImage: '',
            submitImage: defaultSheet,
            flagList: [],
            edit: true
        });
    };

    delSlide() {
        if (this.#listSlide.length === 1) {
            alert('더 이상 슬라이드를 삭제할 수 없습니다.');
        } else {
            this.#setDelListSlide();
        }
    };

    // slide의 edit 변수를 변경해주는 함수
    #editControl(index) {
        slides[this.#nowIndex].edit = false;
        slides[index].edit = true;
    };

    loadSlideToCanvas(index) {
        this.#setNowIndex(index);
        this.#editControl(index);
        const slide = this.#listSlide[index];
        this.#mainCanvasDraw.bringMainCanvasData(slide.mainImage, this.#numRef, this.#tempoRef, slide.num, slide.tempo, this.#listSongform);
        this.#flagCanvasDraw.resetFlag(this.#listFlag);
        FlagCanvasData.bringFlagData(this.#listFlag, slide.flagList);
        this.#flagCanvasDraw.draw(this.#listFlag);
    };

    // Canvas가 Edit 되었을 때 Slide에 내용물이 저장되는 기능
    saveSlide() {
        for (let i = 0; i < listSlide.length; i++) {
            if (listSlide[i].edit) {
                combineCanvas();
                const s = listSlide[i];
                s.mainImage = canvas.toDataURL();
                s.submitImage = canvasSubmit.toDataURL();
                s.flagList = Array.from(flags);
            }
        }
    }

    // 수정 중인 슬라이드가 보이도록 스크롤하는 기능

}


