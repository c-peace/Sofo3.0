import { useEffect, useRef } from 'react';

import './CanvasLayer.css'

export default function CanavasLayer() {

    const canvasFlagRef = useRef();
    const canvasMainRef = useRef();
    const canvasSubmitRef = useRef();

    useEffect(() => {
    }, []);

    return (
        <div id='canvasBox'>
            <canvas ref={canvasFlagRef} id='canvasFlag'></canvas>
            <canvas ref={canvasMainRef} id='canvasMain'></canvas>
            <canvas ref={canvasSubmitRef} id='canvasSubmit'></canvas>
        </div>
    );

}