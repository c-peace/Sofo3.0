export default class SubmitCanvasControl {
    #ctx;

    constructor(ctx) {
        this.#ctx = ctx;
    }

    combineCanvas(canvasMainRef, canvasFlagRef) {
        this.#ctx.drawImage(canvasMainRef.current, 0, 0);
        this.#ctx.drawImage(canvasFlagRef.current, 0, 0);
    }

}