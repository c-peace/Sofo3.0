import slideStore from "../stateManage/slideStore";
import defaultImage from "../assets/defaultSheet.png"

export default class RotatedCanvasDraw {
    #ctx;
    #listSlide = slideStore((state) => state.listSlide);

    constructor(ctx) {
        this.#ctx = ctx;
    }

    // slide에서 1, 2 page를 가지고 와서 canvas에 2개의 악보를 그려놓는 함수
    static drawRotatedCanvas(ctx, listSlide) {
        const image = new Image();
        image.src = listSlide[0].submitImage;
        image.onload = function () {
            ctx.drawImage(image, 0, 0);
            ctx.drawImage(image, 1190, 0)
        }
    }

    // rotatedCanvas의 화면을 rotatedSlide에 저장할 수 있도록 하는 함수

    // 
}