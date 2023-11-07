import './Canvas.css';
import CanavasLayer from './CanvasLayer';
import DrawBtnLayer from './DrawBtnLayer';
import CanvasRotated from './CanvasRotated';
import { useEffect, useRef, useState } from 'react';
import MainCanvasDraw from '../../controls/mainCanvasDraw';

export default function Canavas({ isRotated }) {
    return (
        <div id='canvasBox' style={{ width: `${isRotated ? 'var(--size-canvasRotatedWidth)' : 'var(--size-canvasWidth)'}` }}>
            <IsRotatedCanvas isRotated={isRotated} />
        </div>
    );
}

function IsRotatedCanvas({ isRotated }) {
    const CANVAS = { width: 1190, height: 1684 };

    const canvasRef = {
        canvasMainRef : useRef(null),
        canvasFlagRef : useRef(null)
    };

    const [ctxFlag, setCtxFlag] = useState();
    const [ctxMain, setCtxMain] = useState();

    function drawDefaultSetting(ctxMain) {
        MainCanvasDraw.defaultSet(ctxMain);
    }

    useEffect(() => {
        const canvasMain = canvasRef.canvasMainRef.current;
        const ctxMain = canvasMain.getContext('2d');
        canvasMain.width = CANVAS.width;
        canvasMain.height = CANVAS.height;

        const canvasFlag = canvasRef.canvasFlagRef.current;
        const ctxFlag = canvasFlag.getContext('2d');
        canvasFlag.width = CANVAS.width;
        canvasFlag.height = CANVAS.height;

        setCtxFlag(ctxFlag);
        setCtxMain(ctxMain);
        drawDefaultSetting(ctxMain);
    });

    const [listFlag, setListFlag] = useState([]);

    if (isRotated) {
        return <CanvasRotated />;
    } else {
        return <>
            <DrawBtnLayer listFlag={listFlag} ctxFlag={ctxFlag} ctxMain={ctxMain}/>
            <CanavasLayer listFlag={listFlag} setListFlag={setListFlag} ctxFlag={ctxFlag} ref={canvasRef}/>
        </>;
    }
}