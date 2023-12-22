import './ExportSet.css'
import canvasStore from '../../stateManage/canvasStore';
import SlideControl from '../../controls/slideControl';
import slideStore from '../../stateManage/slideStore';

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
            <ExportSetItem name={'icon-print'} />
            <ExportSetItem name={'icon-download'} />
        </div>
    );
}

function RotationSet() {
    const { isRotated, reverseRotated } = canvasStore();
    const { listSlide, listRotatedSlide, resetListRotatedSlide } = slideStore();
    const slideControl = new SlideControl(listSlide);

    function rotatedHandler() {
        if (!isRotated) {
            slideControl.saveSlide();
        } else {
            // console.log(listRotatedSlide[0].rotatedImage);
            resetListRotatedSlide();
        }
        reverseRotated();
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