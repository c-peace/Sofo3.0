import { useEffect, useState } from 'react';
import './CanvasLayer.css'
import FlagCanvasDraw from '../../controls/flagCanvasDraw';
import canvasStore from '../../stateManage/canvasStore';
import MainCanvasDraw from '../../controls/mainCanvasDraw.js'

export default function CanavasLayer() {
    const { canvasMainRef, canvasFlagRef, canvasSubmitRef, listFlag, setListFlag, ctxFlag, setCtxFlag, setCtxMain, setCtxSubmit } = canvasStore();

    const [dragok, setDragok] = useState(false);
    const [startX, setStartX] = useState();
    const [startY, setStartY] = useState();
    const flagCanvasDraw = new FlagCanvasDraw(ctxFlag);

    const CANVAS = { width: 1190, height: 1684 };

    function drawDefaultSetting(ctxMain) {
        MainCanvasDraw.defaultSet(ctxMain);
    }

    useEffect(() => {
        const canvasMain = canvasMainRef.current;
        const ctxMain = canvasMain.getContext('2d');
        setCtxMain(ctxMain);
        canvasMain.width = CANVAS.width;
        canvasMain.height = CANVAS.height;

        const canvasFlag = canvasFlagRef.current;
        const ctxFlag = canvasFlag.getContext('2d');
        setCtxFlag(ctxFlag);
        canvasFlag.width = CANVAS.width;
        canvasFlag.height = CANVAS.height;

        const canvasSubmit = canvasSubmitRef.current;
        const ctxSubmit = canvasSubmit.getContext('2d');
        setCtxSubmit(ctxSubmit);
        canvasSubmit.width = CANVAS.width;
        canvasSubmit.height = CANVAS.height;

        drawDefaultSetting(ctxMain);
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
};