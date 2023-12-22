import { useEffect } from 'react';
import canvasStore from '../../stateManage/canvasStore';
import './CanvasRotated.css'
import RotatedCanvasDraw from '../../controls/rotatedCanvasDraw';
import slideStore from '../../stateManage/slideStore';
import SlideControl from '../../controls/slideControl';

export default function CanvasRotated() {
    const ROTATEDCANVAS = { width: 2380, height: 1684 };
    const { canvasRotatedRef, setCtxRotated, ctxRotated } = canvasStore();
    const { listSlide, listRotatedSlide } = slideStore();
    const slideControl = new SlideControl(listSlide);

    useEffect(() => {
        const canvasRotated = canvasRotatedRef.current;
        const ctxRotated = canvasRotated.getContext('2d');
        setCtxRotated(ctxRotated);
        canvasRotated.width = ROTATEDCANVAS.width;
        canvasRotated.height = ROTATEDCANVAS.height;
        slideControl.convertRotatedSlide(canvasRotatedRef, ctxRotated);
    }, []);

    if (listRotatedSlide[0]) {
        RotatedCanvasDraw.drawRotatedCanvasSet(ctxRotated, listRotatedSlide[0].rotatedImage);
    }


    return <canvas ref={canvasRotatedRef} id='canvasRotated'></canvas>;
}