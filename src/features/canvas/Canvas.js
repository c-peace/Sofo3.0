import './Canvas.css';
import CanavasLayer from './CanvasLayer';
import DrawBtnLayer from './DrawBtnLayer';
import CanvasRotated from './CanvasRotated';
import canvasStore from '../../stateManage/canvasStore';

export default function Canavas() {
    const { isRotated } = canvasStore();

    return (
        <div id='canvasBox' style={{ width: `${isRotated ? 'var(--size-canvasRotatedWidth)' : 'var(--size-canvasWidth)'}` }}>
            <IsRotatedCanvas />
        </div>
    );
}

function IsRotatedCanvas() {
    const { isRotated } = canvasStore();

    if (isRotated) {
        return <CanvasRotated />;
    } else {
        return <div>
            <DrawBtnLayer />
            <CanavasLayer />
        </div>;
    }
}