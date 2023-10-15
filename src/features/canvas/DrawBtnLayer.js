import { forwardRef, useEffect, useState } from 'react';
import { InputNum, DropDownKey, InputTempo, BtnInfo, DropDownSongform, UploadImage, DropDownFlag } from './DrawBtns';
import MainCanvasDraw from '../../controls/mainCanvasDraw';
import './DrawBtnLayer.css';

const DrawBtnLayer = forwardRef(function DrawBtn(props, ref) {
    const canvasMainRef = ref;
    const [ctx, setCtx] = useState();
    const mainCanvasDraw = new MainCanvasDraw(ctx);

    useEffect(() => {
        const canvas = canvasMainRef.current;
        const context = canvas.getContext('2d');
        setCtx(context);
    }, [])

    function btnControls() {

    }

    return (
        <div id='btnBox'>
            <InputNum defaultValue={1} />
            <DropDownKey />
            <InputTempo defaultValue={110} />
            <BtnInfo />
            <DropDownSongform />
            <UploadImage />
            <DropDownFlag />
        </div>
    );
});

export default DrawBtnLayer;