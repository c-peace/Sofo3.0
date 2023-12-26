import { useEffect } from 'react';
import canvasStore from '../../stateManage/canvasStore';
import './CanvasRotated.css'
import RotatedCanvasDraw from '../../controls/rotatedCanvasDraw';
import slideStore from '../../stateManage/slideStore';
import SlideControl from '../../controls/slideControl';

export default function CanvasRotated() {
    const ROTATEDCANVAS = { width: 2380, height: 1684 };
    const { canvasRotatedRef, canvasConvertRef, setCtxRotated, setCtxConvert } = canvasStore();
    const { listSlide, listRotatedSlide } = slideStore();
    const slideControl = new SlideControl(listSlide);

    useEffect(() => {
        const canvasRotated = canvasRotatedRef.current;
        const ctxRotated = canvasRotated.getContext('2d');
        setCtxRotated(ctxRotated);
        canvasRotated.width = ROTATEDCANVAS.width;
        canvasRotated.height = ROTATEDCANVAS.height;

        const canvasConvert = canvasConvertRef.current;
        const ctxConvert = canvasConvert.getContext('2d');
        setCtxConvert(ctxConvert);
        canvasConvert.width = ROTATEDCANVAS.width;
        canvasConvert.height = ROTATEDCANVAS.height;

        RotatedCanvasDraw.drawRotatedCanvasSet(ctxRotated, listSlide);

        slideControl.convertRotatedSlide(canvasConvertRef, ctxConvert);
    }, []);


    return <>
        <canvas ref={canvasRotatedRef} id='canvasRotated'></canvas>;
        <canvas ref={canvasConvertRef} id='canvasConvert'></canvas>
    </>
}