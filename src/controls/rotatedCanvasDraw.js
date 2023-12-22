import slideStore from "../stateManage/slideStore";
import defaultImage from "../assets/defaultSheet.png";

export default class RotatedCanvasDraw {
    #ctx;
    #listSlide = slideStore((state) => state.listSlide);

    constructor(ctx) {
        this.#ctx = ctx;
    }

    drawRotatedCanvas(url) {
        const ctx = this.#ctx;
        const image = new Image();
        image.src = url;
        image.onload = function () {
            ctx.drawImage(image, 0, 0);

        }
    }

    // slide에서 1, 2 page를 가지고 와서 canvas에 2개의 악보를 그려놓는 함수
    // 이 함수를 개조해서 slide를 재정렬 시키는 함수로 만들고 결국에 화면에 띄우는 함수는 slide에서 이미지를 가져와서 보여주는 정도로만 하면 될 것 같다.
    static drawRotatedCanvasSet(ctx, array) {
        const imageL = new Image();
        const imageR = new Image();
        imageL.src = array[0].submitImage;
        imageL.onload = function () {
            ctx.drawImage(imageL, 0, 0);
        }
        if (array[1]) {
            imageR.src = array[1].submitImage;
            imageR.onload = function () {
                ctx.drawImage(imageR, 1190, 0);
            }
        }
    }
}