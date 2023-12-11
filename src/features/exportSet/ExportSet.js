import './ExportSet.css'
import canvasStore from '../../stateManage/canvasStore';
import RotatedCanvasDraw from '../../controls/rotatedCanvasDraw';

export default function ExportSet() {
    const {isRotated} = canvasStore()

    return (
        <div id='exportSet' style={{zIndex:`${isRotated ? 2 : 0}`}}>
            <ExportSetInfo />
            <ExportSetBox  />
        </div>
    );
}

function ExportSetBox() {
    return (
        <div id='exportSetBox'>
            <RotationSet  />
            <ExportSetItem name={'icon-print'} />
            <ExportSetItem name={'icon-download'} />
        </div>
    );
}

function RotationSet() {
    const {isRotated, reverseRotated, ctxRotated} = canvasStore();
    const rotatedCanvasDraw = new RotatedCanvasDraw(ctxRotated);

    function rotatedHandler() {
        reverseRotated();
        // rotatedCanvasDraw.drawRotatedCanvas();
    }

    return <i id='rotationSet' className='icon-doc' style={{ transform: `rotate(${isRotated ? -90 : 0}deg)` }} onClick={() => rotatedHandler()}></i>
}

function ExportSetItem({ name }) {
    return <i id='exportSetItem' className={name}></i>;
}

function ExportSetInfo() {
    return (
        <div id='exportSetInfo'>
            <ExportSetInfoItem name={'Layout'} />
            <ExportSetInfoItem name={'Print'} />
            <ExportSetInfoItem name={'Save'} />
        </div>
    );
}

function ExportSetInfoItem({ name }) {
    return <h1 id='exportSetInfoItem'>{name}</h1>;
}