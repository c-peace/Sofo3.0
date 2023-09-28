import { useEffect, useRef } from 'react';
import defaultSheet from "/workspaces/Sofo3.0/src/assets/defaultSheet.png";
import './CanvasLayer.css'

export default function CanavasLayer() {

    const canvasFlagRef = useRef();
    const canvasMainRef = useRef();
    const canvasSubmitRef = useRef();

    useEffect(() => {
        const canvasMain = canvasMainRef.current;
        const ctxMain = canvasMain.getContext('2d');
        canvasMain.width = 1190;
        canvasMain.height = 1684;
        const canvasFlag = canvasFlagRef.current;
        const ctxFlag = canvasFlag.getContext('2d');
        canvasFlag.width = 1190;
        canvasFlag.height = 1684;
        const canvasSubmit = canvasSubmitRef.current;
        const ctxSubmit = canvasSubmit.getContext('2d');
        canvasSubmit.width = 1190;
        canvasSubmit.height = 1684;
        
        drawDefaultSheet(ctxMain);
    }, []);

    return (
        <div id='canvasBox'>
            <canvas ref={canvasFlagRef} id='canvasFlag'></canvas>
            <canvas ref={canvasMainRef} id='canvasMain'></canvas>
            <canvas ref={canvasSubmitRef} id='canvasSubmit'></canvas>
        </div>
    );

    // Main canvas - Default Setting
    function drawDefaultSheet(ctx) {
        const image = new Image();
        image.src = defaultSheet;
        image.onload = function () {
            ctx.drawImage(image, 0, 0);
        }
    }
}
