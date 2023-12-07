import { InputNum, DropDownKey, InputTempo, BtnInfo, DropDownSongform, UploadImage, DropDownFlag } from './DrawBtns';
import MainCanvasDraw from '../../controls/mainCanvasDraw';
import './DrawBtnLayer.css';
import FlagCanvasDraw from '../../controls/flagCanvasDraw';
import canvasStore from '../../stateManage/canvasStore';

export default function DrawBtnLayer() {
    const {ctxMain, ctxFlag, listFlag, listSongform, imageRef} = canvasStore();

    const mainCanvasDraw = new MainCanvasDraw(ctxMain);
    const flagCanvasDraw = new FlagCanvasDraw(ctxFlag);

    function btnControls(trigger, value = '', event = '') {
        switch (trigger) {
            case 'num':
                mainCanvasDraw.drawNum(value);
                break;

            case 'key':
                mainCanvasDraw.drawKey(value);
                break;

            case 'tempo':
                mainCanvasDraw.drawTempo(value);
                break;

            case 'info':
                mainCanvasDraw.inputInfo();
                break;

            case 'songform':
                mainCanvasDraw.drawSongform(listSongform, value);
                break;

            case 'eraseSongform':
                mainCanvasDraw.eraseSongform(listSongform);
                break;

            case 'image':
                mainCanvasDraw.searchImage(event, imageRef);
                break;

            case 'flag':
                flagCanvasDraw.createFlag(value, listFlag);
                break;
            case 'eraseFlag':
                flagCanvasDraw.eraseFlag(listFlag);
                break;
            default:
                alert('Error(DrawBtnLayer.js) : trigger is not defined');
                break;
        }
    }

    return (
        <div id='btnBox'>
            <InputNum defaultValue={1} btnControls={btnControls} />
            <DropDownKey btnControls={btnControls} />
            <InputTempo defaultValue={110} btnControls={btnControls} />
            <BtnInfo btnControls={btnControls} />
            <DropDownSongform btnControls={btnControls} />
            <UploadImage ref={imageRef} btnControls={btnControls} />
            <DropDownFlag btnControls={btnControls} />
        </div>
    );
}