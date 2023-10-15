import './Canvas.css';
import CanavasLayer from './CanvasLayer';
import DrawBtnLayer from './DrawBtnLayer';
import CanvasRotated from './CanvasRotated';
import { useRef } from 'react';

export default function Canavas({ isRotated }) {
    return (
        <div id='canvasBox' style={{ width: `${isRotated ? 'var(--size-canvasRotatedWidth)' : 'var(--size-canvasWidth)'}` }}>
            <IsRotatedCanvas isRotated={isRotated} />
        </div>
    );
}

function IsRotatedCanvas({ isRotated }) {

    const canvasMainRef = useRef(null);

    if (isRotated) {
        return <CanvasRotated />;
    } else {
        return <>
            <DrawBtnLayer ref={canvasMainRef}/>
            <CanavasLayer ref={canvasMainRef}/>
        </>;
    }
}