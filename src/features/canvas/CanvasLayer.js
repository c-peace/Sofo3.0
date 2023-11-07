import { forwardRef, useRef, useState } from 'react';
import './CanvasLayer.css'
import FlagCanvasDraw from '../../controls/flagCanvasDraw';


const CanvasLayer = forwardRef(function CanavasLayer({listFlag, setListFlag, ctxFlag}, ref) {
    const { canvasMainRef, canvasFlagRef } = ref;
    const canvasSubmitRef = useRef();


    const [dragok, setDragok] = useState(false);
    const [startX, setStartX] = useState();
    const [startY, setStartY] = useState();
    const flagCanvasDraw = new FlagCanvasDraw(ctxFlag);



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
});


export default CanvasLayer;