import './ExportSet.css'
import canvasStore from '../../stateManage/canvasStore';
import SlideControl from '../../controls/slideControl';
import slideStore from '../../stateManage/slideStore';
import ExportControl from '../../controls/exportControl';

export default function ExportSet() {
    const { isRotated } = canvasStore()

    return (
        <div id='exportSet' style={{ zIndex: `${isRotated ? 2 : 0}` }}>
            <ExportSetInfo />
            <ExportSetBox />
        </div>
    );
}

function ExportSetBox() {
    return (
        <div id='exportSetBox'>
            <RotationSet />
            <PrintSet />
            <DownloadSet />
        </div>
    );
}

function RotationSet() {
    const { isRotated, reverseRotated } = canvasStore();
    const { listSlide, resetListRotatedSlide, nowIndex } = slideStore();
    const slideControl = new SlideControl(listSlide);

    function rotatedHandler() {
        if (!isRotated) {
            slideControl.saveSlide();
        } else {
            resetListRotatedSlide();
        }
        reverseRotated();
    }

    return <i id='rotationSet' className='icon-doc' style={{ transform: `rotate(${isRotated ? -90 : 0}deg)` }} onClick={() => rotatedHandler()}></i>
}

function PrintSet() {
    const { isRotated } = canvasStore();
    const exportControl = new ExportControl(isRotated);
    return <i id='exportSetItem' className='icon-print' onClick={() => exportControl.pdfControl('print')}></i>;
}

function DownloadSet() {
    const { isRotated } = canvasStore();
    const exportControl = new ExportControl(isRotated);

    return <i id='exportSetItem' className='icon-download' onClick={() => exportControl.pdfControl('download')}></i>
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