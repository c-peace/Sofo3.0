import FlagCanvasDraw from '../../controls/flagCanvasDraw';
import MainCanvasDraw from '../../controls/mainCanvasDraw';
import canvasStore from '../../stateManage/canvasStore';
import './CanvasBtnR.css'

export default function CanvasBtnR() {
    const { ctxMain, ctxFlag, numRef, tempoRef, listSongform, listFlag } = canvasStore();

    const mainCanvasDraw = new MainCanvasDraw(ctxMain);
    const flagCanvasDraw = new FlagCanvasDraw(ctxFlag);

    function btnRControls(trigger) {
        switch (trigger) {
            case 'Text':
                alert('개발 중 . . .');
                break;

            case 'Reset':
                mainCanvasDraw.resetMainCanvas(numRef, tempoRef, listSongform);
                MainCanvasDraw.defaultSet(ctxMain);
                flagCanvasDraw.resetFlag(listFlag);
                break;

            default:
                alert('Error(CanvasBtnR.js) : trigger is not defined');
                break;
        }
    }

    return (
        <div id="CanvasBtnRGroup">
            {/* <BtnForm icon={'icon-sticky-note-o'} name={'Text'} btnRControls={btnRControls} /> */}
            <BtnForm icon={'icon-cw'} name={'Reset'} btnRControls={btnRControls} />
        </div>
    );
}

function BtnForm({ icon, name, btnRControls }) {
    return (
        <div id='btnForm' onClick={() => btnRControls(name)}>
            <i id='btnFormId' className={icon}></i>
            <h1 id='btnFormName'>{name}</h1>
        </div>
    );
}