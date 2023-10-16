import { forwardRef, useEffect, useRef, useState } from 'react';
import { InputNum, DropDownKey, InputTempo, BtnInfo, DropDownSongform, UploadImage, DropDownFlag } from './DrawBtns';
import MainCanvasDraw from '../../controls/mainCanvasDraw';
import './DrawBtnLayer.css';

const DrawBtnLayer = forwardRef(function DrawBtn(props, ref) {
    const canvasMainRef = ref;
    const imageRef = useRef();
    const [ctx, setCtx] = useState();
    const songformList = [];
    const mainCanvasDraw = new MainCanvasDraw(ctx);

    useEffect(() => {
        const canvas = canvasMainRef.current;
        const context = canvas.getContext('2d');
        setCtx(context);
    }, [])

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
                mainCanvasDraw.drawSongform(songformList, value);
                break;

            case 'eraseSongform':
                mainCanvasDraw.eraseSongform(songformList);
                break;

            case 'image':
                mainCanvasDraw.searchImage(event, imageRef);
                break;

            case 'flag':
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
            <DropDownFlag />
        </div>
    );
});

export default DrawBtnLayer;