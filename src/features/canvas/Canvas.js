import './Canvas.css';
import CanavasLayer from './CanvasLayer';
import DrawBtn from './DrawBtn';

export default function Canavas() {
    return (
        <div id='canvasBox'>
            <DrawBtn />
            <CanavasLayer />
        </div>
    );
}