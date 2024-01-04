import { jsPDF } from "jspdf";
import slideStore from "../stateManage/slideStore";
import printJS from 'print-js'

export default class ExportControl {
    #rotated
    #listSlide = slideStore((state) => state.listSlide);
    #listRotatedSlide = slideStore((state) => state.listRotatedSlide);

    constructor(rotated) {
        this.#rotated = rotated;
    }

    async pdfControl(type) {
        const doc = new jsPDF({
            orientation: this.#rotated ? "l" : "p", // p: 가로(기본), l: 세로
            unit: "px",
            format: this.#rotated ? "a3" : "a4",
        });
        const array = this.#rotated ? this.#listRotatedSlide : this.#listSlide;
        const docWidth = doc.internal.pageSize.getWidth();
        const docHeight = doc.internal.pageSize.getHeight();

        for (let i = 0; i < array.length; i++) {
            doc.setPage(i + 1);
            const slide = array[i];
            const image = await this.#rotated ? this.#loadRotatedSlideImage(slide) : this.#loadSlideImage(slide);
            doc.addImage((await image).src, 'PNG', 0, 0, docWidth, docHeight, undefined, "FAST");

            if (i != (array.length - 1)) {
                doc.addPage();
            }
        }

        if (type == 'download') {
            doc.save("sofoScore.pdf");
        } else {
            window.open(doc.output('bloburl'));
        }

    }

    async #loadSlideImage(url) {
        let img = new Image();
        img.src = url.submitImage;

        const promise = new Promise((resolve) => {
            img.onload = resolve;
        });

        await promise;
        return img;
    }

    async #loadRotatedSlideImage(url) {
        let img = new Image();
        img.src = url.rotatedImage;

        const promise = new Promise((resolve) => {
            img.onload = resolve;
        });

        await promise;
        return img;
    }
}