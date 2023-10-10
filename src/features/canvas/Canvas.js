import './Canvas.css';
import CanavasLayer from './CanvasLayer';
import DrawBtn from './DrawBtn';
import CanvasRotated from './CanvasRotated';

export default function Canavas({ isRotated }) {
    return (
        <div id='canvasBox' style={{ width: `${isRotated ? 'var(--size-canvasRotatedWidth)' : 'var(--size-canvasWidth)'}` }}>
            <IsRotatedCanvas isRotated={isRotated} />
        </div>
    );
}

function IsRotatedCanvas({ isRotated }) {
    if (isRotated) {
        return <CanvasRotated />;
    } else {
        return <>
            <DrawBtn />
            <CanavasLayer />
        </>;
    }
}