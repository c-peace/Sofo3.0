import { forwardRef, useEffect, useRef, useState } from 'react';
import defaultSheet from "/workspaces/Sofo3.0/src/assets/defaultSheet.png";
import './CanvasLayer.css'

const CANVAS = { width: 1190, height: 1684 };


const CanvasLayer = forwardRef(function CanavasLayer(props, ref) {
    const canvasMainRef = ref;
    const canvasFlagRef = useRef();
    const canvasSubmitRef = useRef();
    const [flags, setFlags] = useState([]);

    useEffect(() => {
        const canvasMain = canvasMainRef.current;
        const ctxMain = canvasMain.getContext('2d');
        canvasMain.width = CANVAS.width;
        canvasMain.height = CANVAS.height;
        drawDefaultSheet(ctxMain)

        setFlags([{
            x: Math.floor(Math.random() * 951) + 120,
            y: Math.floor(Math.random() * 100) + 1500,
            width: 50,
            height: 50,
            strokeStyle: "red",
            fillStyle: "white",
            name: 'A',
            isDragging: false
        }]);

    }, []);

    useEffect(() => {
        const canvasFlag = canvasFlagRef.current;
        const ctxFlag = canvasFlag.getContext('2d');
        canvasFlag.width = CANVAS.width;
        canvasFlag.height = CANVAS.height;

        draw(ctxFlag, flags);

    }, [flags]);

    return (
        <div id='canvasLayerBox'>
            <canvas ref={canvasFlagRef} id='canvasFlag'></canvas>
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

    // Flag canvas
    function createFlag(name) {
        flags.push({
            x: Math.floor(Math.random() * 951) + 120,
            y: Math.floor(Math.random() * 100) + 1500,
            width: 50,
            height: 50,
            strokeStyle: "red",
            fillStyle: "white",
            name: name,
            isDragging: false
        });
        draw();
    }

    function clearCanvasFlag(ctxFlag) {
        ctxFlag.clearRect(0, 0, CANVAS.width, CANVAS.height);
    }

    function rect(ctxFlag, r) {
        ctxFlag.save();
        ctxFlag.beginPath();
        // inner fill
        ctxFlag.fillStyle = r.fillStyle;
        ctxFlag.fillRect(r.x, r.y, r.width, r.height);
        // outline
        ctxFlag.lineWidth = 3;
        ctxFlag.strokeRect(r.x, r.y, r.width, r.height);
        // text
        ctxFlag.textAlign = 'center';
        ctxFlag.fillStyle = r.strokeStyle;
        ctxFlag.font = '37px Arial';
        ctxFlag.fillText(r.name, r.x + 25, r.y + 39);
        ctxFlag.restore();
    }

    function draw(ctxFlag, flags) {
        clearCanvasFlag(ctxFlag);
        for (let i = 0; i < flags.length; i++) {
            rect(ctxFlag, flags[i]);
        }
    }
});


export default CanvasLayer;