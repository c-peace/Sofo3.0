import './Canvas.css';
import CanavasLayer from './CanvasLayer';
import DrawBtnLayer from './DrawBtnLayer';
import CanvasRotated from './CanvasRotated';
import { useRef, useState } from 'react';

export default function Canavas({ isRotated }) {
    return (
        <div id='canvasBox' style={{ width: `${isRotated ? 'var(--size-canvasRotatedWidth)' : 'var(--size-canvasWidth)'}` }}>
            <IsRotatedCanvas isRotated={isRotated} />
        </div>
    );
}

function IsRotatedCanvas({ isRotated }) {

    const canvasRef = {
        canvasMainRef : useRef(null),
        canvasFlagRef : useRef(null)
    };

    const [listFlag, setListFlag] = useState([]);

    if (isRotated) {
        return <CanvasRotated />;
    } else {
        return <>
            <DrawBtnLayer listFlag={listFlag} ref={canvasRef}/>
            <CanavasLayer listFlag={listFlag} setListFlag={setListFlag} ref={canvasRef}/>
        </>;
    }
}