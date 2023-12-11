import { useEffect } from 'react';
import canvasStore from '../../stateManage/canvasStore';
import './CanvasRotated.css'
import RotatedCanvasDraw from '../../controls/rotatedCanvasDraw';
import slideStore from '../../stateManage/slideStore';

export default function CanvasRotated() {
    const CANVAS = { width: 2380, height: 1684 };
    const { canvasRotatedRef, setCtxRotated } = canvasStore();
    const { listSlide } = slideStore();

    useEffect(() => {
        const canvasRotated = canvasRotatedRef.current;
        const ctxRotated = canvasRotated.getContext('2d');
        setCtxRotated(ctxRotated);
        canvasRotated.width = CANVAS.width;
        canvasRotated.height = CANVAS.height;

        return RotatedCanvasDraw.drawRotatedCanvas(ctxRotated, listSlide);
    }, []);

    return <canvas ref={canvasRotatedRef} id='canvasRotated'></canvas>;
}