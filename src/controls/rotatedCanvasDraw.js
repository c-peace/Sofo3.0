import slideStore from "../stateManage/slideStore";
import defaultImage from "../assets/defaultSheet.png";

export default class RotatedCanvasDraw {
    #ctx;
    #listSlide = slideStore((state) => state.listSlide);

    constructor(ctx) {
        this.#ctx = ctx;
    }

    drawRotatedImageConverter(ctxRotated, srcImageL, srcImageR, isBeImageR) {
        const ctx = ctxRotated;
        const imageL = new Image();
        const imageR = new Image();

        imageL.src = srcImageL.submitImage;
        imageL.onload = function () {
            ctx.drawImage(imageL, 0, 0);

            if (isBeImageR) {
                imageR.src = srcImageR.submitImage;
                imageR.onload = function () {
                    ctx.drawImage(imageR, 1190, 0);
                }
            }
        }
    }








    // slide에서 1, 2 page를 가지고 와서 canvas에 2개의 악보를 그려놓는 함수
    // 이 함수를 개조해서 slide를 재정렬 시키는 함수로 만들고 결국에 화면에 띄우는 함수는 slide에서 이미지를 가져와서 보여주는 정도로만 하면 될 것 같다.
    static drawRotatedCanvasSet(ctx, url) {
        const image = new Image();
        image.src = url;
        image.onload = function () {
            ctx.drawImage(image, 0, 0);
        }
    }

    // rotatedCanvas의 화면을 rotatedSlide에 저장할 수 있도록 하는 함수

    // Rotated가 변경될 때 모든 slide의 내용들이 합쳐지는 작업을 거쳐야 할 것 같음.
    // 첫 페이지는 화면에 그려져야함.
    // 두번째 부터는 rotatedSlide 변수에 합쳐진 그림으로 저장되어야함.
    // 즉, rotated가 바뀌면 특정 함수가 실행되어야 하는데 그 함수에서는 기존의 slide의 내용들이 재 정렬되도록 해야함.
}