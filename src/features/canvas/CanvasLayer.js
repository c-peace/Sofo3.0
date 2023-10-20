import { forwardRef, useEffect, useRef, useState } from 'react';
import defaultSheet from "/workspaces/Sofo3.0/src/assets/defaultSheet.png";
import './CanvasLayer.css'
import FlagCanvasDraw from '../../controls/flagCanvasDraw';

const CANVAS = { width: 1190, height: 1684 };


const CanvasLayer = forwardRef(function CanavasLayer({listFlag, setListFlag}, ref) {
    const { canvasMainRef, canvasFlagRef } = ref;
    const canvasSubmitRef = useRef();

    const [ctxFlag, setCtxFlag] = useState();
    const [dragok, setDragok] = useState(false);
    const [startX, setStartX] = useState();
    const [startY, setStartY] = useState();
    const flagCanvasDraw = new FlagCanvasDraw(ctxFlag);

    useEffect(() => {
        const canvasMain = canvasMainRef.current;
        const ctxMain = canvasMain.getContext('2d');
        canvasMain.width = CANVAS.width;
        canvasMain.height = CANVAS.height;
        drawDefaultSheet(ctxMain)

        const canvasFlag = canvasFlagRef.current;
        const ctxFlag = canvasFlag.getContext('2d');
        setCtxFlag(ctxFlag);
        canvasFlag.width = CANVAS.width;
        canvasFlag.height = CANVAS.height;
    }, []);

    const mouseDown = (e) => {
        flagCanvasDraw.myDown(e, dragok, setDragok, listFlag, setListFlag, setStartX, setStartY);
    }

    const mouseUp = (e) => {
        flagCanvasDraw.myUp(e, setDragok, listFlag, setListFlag);
    }

    const mousemove = (e) => {
        flagCanvasDraw.myMove(e, dragok, listFlag, setListFlag, startX, setStartX, startY, setStartY);
    }

    return (
        <div id='canvasLayerBox'>
            <canvas ref={canvasFlagRef} id='canvasFlag' onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mousemove}></canvas>
            <canvas ref={canvasMainRef} id='canvasMain'></canvas>
            <canvas ref={canvasSubmitRef} id='canvasSubmit'></canvas>
        </div>
    );

    // Main canvas
    function drawDefaultSheet(ctxMain) {
        const image = new Image();
        image.src = defaultSheet;
        image.onload = function () {
            ctxMain.drawImage(image, 0, 0);
        }
    }
});


export default CanvasLayer;