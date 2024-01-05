import FlagCanvasData from "./flagCanvasData";
import canvasStore from "../stateManage/canvasStore";
import FlagRectEngine from "./flagRectEngine";

export default class FlagCanvasDraw {
    #ctx;
    #canvasWidth = 1190;
    #canvasHeight = 1684;

    #isColorApplied = canvasStore((state) => state.isColorApplied);
    #isTypeApplied = canvasStore((state) => state.isTypeApplied);

    constructor(ctx) {
        this.#ctx = ctx;
    }

    static defaultSet(ctxFlag, listFlag, isColorApplied, isTypeApplied) {
        ctxFlag.clearRect(0, 0, 1190, 1684);
        for (let i = 0; i < listFlag.length; i++) {
            FlagRectEngine.rect(ctxFlag, listFlag[i], isColorApplied, isTypeApplied);
        }
    }

    resetFlag(listFlag) {
        this.clearFlagCanvas();
        FlagCanvasData.resetFlagData(listFlag);
    }

    eraseFlag(listFlag) {
        this.clearFlagCanvas();
        FlagCanvasData.eraseFlagData(listFlag);
        this.draw(listFlag);
    }

    clearFlagCanvas() {
        const ctx = this.#ctx;
        ctx.clearRect(0, 0, this.#canvasWidth, this.#canvasHeight);
    }

    draw(listFlag) {
        this.clearFlagCanvas();
        for (let i = 0; i < listFlag.length; i++) {
            // this.#rect(listFlag[i]);
            FlagRectEngine.rect(this.#ctx, listFlag[i], this.#isColorApplied, this.#isTypeApplied)
        }
    }

    createFlag(flagName, listFlag) {
        FlagCanvasData.createFlagData(listFlag, flagName);
        this.draw(listFlag);
    }


    // handle mousedown events
    myDown(e, dragok, setDragok, listFlag, setListFlag, setStartX, setStartY) {
        const tempListFlag = listFlag;

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        const mx = (e.nativeEvent.offsetX / ((window.innerHeight * 88 / 100) / 842 * 595)) * this.#canvasWidth;
        const my = (e.nativeEvent.offsetY / (window.innerHeight * 88 / 100)) * this.#canvasHeight;

        // test each shape to see if mouse is inside        
        setDragok(false);

        
        for (let i = tempListFlag.length - 1; i >= 0; i--) {
            let s = tempListFlag[i];

            if (
                !dragok &&
                mx > s.x &&
                mx < s.x + s.width &&
                my > s.y &&
                my < s.y + s.height
            ) {
                // if yes, set that rects isDragging=true
                setDragok(true);
                s.isDragging = true;
            }
        }

        setListFlag(tempListFlag);
        // save the current mouse position
        setStartX(mx);
        setStartY(my);
    }

    // handle mouseup events
    myUp(e, setDragok, listFlag, setListFlag) {
        const tempListFlag = listFlag;

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // clear all the dragging flags
        setDragok(false);
        for (let i = 0; i < tempListFlag.length; i++) {
            tempListFlag[i].isDragging = false;
        }

        setListFlag(tempListFlag);
    }

    // handle mouse moves
    myMove(e, dragok, listFlag, setListFlag, startX, setStartX, startY, setStartY) {
        const tempListFlag = listFlag;

        // if we're dragging anything...
        if (dragok) {
            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation();

            // get the current mouse position
            const mx = (e.nativeEvent.offsetX / ((window.innerHeight * 88 / 100) / 842 * 595)) * this.#canvasWidth;
            const my = (e.nativeEvent.offsetY / (window.innerHeight * 88 / 100)) * this.#canvasHeight;

            // calculate the distance the mouse has moved
            // since the last mousemove
            const dx = mx - startX;
            const dy = my - startY;

            // move each rect that isDragging
            // by the distance the mouse has moved
            // since the last mousemove
            for (let i = 0; i < tempListFlag.length; i++) {
                const s = tempListFlag[i];
                if (s.isDragging) {
                    s.x += dx;
                    s.y += dy;
                }
            }

            // redraw the scene with the new rect positions
            this.draw(tempListFlag);

            // list update
            setListFlag(tempListFlag);

            // reset the starting mouse position for the next mousemove
            setStartX(mx);
            setStartY(my);
        }
    }
}