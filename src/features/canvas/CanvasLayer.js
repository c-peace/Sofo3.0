import { useEffect, useRef, useState } from 'react';
import './CanvasLayer.css'
import FlagCanvasDraw from '../../controls/flagCanvasDraw';
import MainCanvasDraw from '../../controls/mainCanvasDraw.js'
import canvasStore from '../../stateManage/canvasStore';
import slideStore from '../../stateManage/slideStore.js';
import SlideControl from '../../controls/slideControl.js';

export default function CanavasLayer() {
    const { canvasMainRef, canvasFlagRef, canvasSubmitRef, listFlag, setListFlag, ctxFlag, setCtxFlag, ctxMain, setCtxMain, setCtxSubmit, isColorApplied, isTypeApplied, listSongform, numRef, tempoRef } = canvasStore();
    const { listSlide, slideAddDelCtrl, nowIndex, changeSaveSlide } = slideStore();


    const [dragok, setDragok] = useState(false);
    const [startX, setStartX] = useState();
    const [startY, setStartY] = useState();
    const routineSetFirstStopRef = useRef(false);
    const slideCtrlFirstStopRef = useRef(false);
    const indexCtrlFirstStopRef = useRef(false);
    const saveFirstStopRef = useRef(false);
    const flagCanvasDraw = new FlagCanvasDraw(ctxFlag);
    const mainCanvasDraw = new MainCanvasDraw(ctxMain);
    const slideControl = new SlideControl(listSlide);

    const CANVAS = { width: 1190, height: 1684 };

    function drawDefaultSetting(ctxMain, ctxFlag) {
        MainCanvasDraw.defaultSet(ctxMain, listSlide, nowIndex, numRef, tempoRef);
        FlagCanvasDraw.defaultSet(ctxFlag, listFlag, isColorApplied, isTypeApplied);
    }

    // canvas
    useEffect(() => {
        const canvasMain = canvasMainRef.current;
        const ctxMain = canvasMain.getContext('2d');
        setCtxMain(ctxMain);
        canvasMain.width = CANVAS.width;
        canvasMain.height = CANVAS.height;

        const canvasFlag = canvasFlagRef.current;
        const ctxFlag = canvasFlag.getContext('2d');
        setCtxFlag(ctxFlag);
        canvasFlag.width = CANVAS.width;
        canvasFlag.height = CANVAS.height;

        const canvasSubmit = canvasSubmitRef.current;
        const ctxSubmit = canvasSubmit.getContext('2d');
        setCtxSubmit(ctxSubmit);
        canvasSubmit.width = CANVAS.width;
        canvasSubmit.height = CANVAS.height;

        drawDefaultSetting(ctxMain, ctxFlag);
    }, []);

    // routineSet
    useEffect(() => {
        if (routineSetFirstStopRef.current) {
            mainCanvasDraw.reloadSongform(listSongform);
            flagCanvasDraw.draw(listFlag);
        } else {
            routineSetFirstStopRef.current = true;
        }
    }, [isColorApplied, isTypeApplied])

    // slideCtrl
    useEffect(() => {
        if (slideCtrlFirstStopRef.current) {
            if (slideAddDelCtrl === 'add') {
                slideControl.editAddControl(listSlide.length - 1);
            } else {
                if (nowIndex === 0) {
                    slideControl.editDelControl(0);
                    slideControl.arrangeId();
                    slideControl.loadSlideToCanvas(nowIndex);
                } else {
                    slideControl.editDelControl(nowIndex - 1);
                    slideControl.arrangeId();
                }
            }
        } else {
            slideCtrlFirstStopRef.current = true;
        }
    }, [listSlide])

    // indexCtrl
    useEffect(() => {
        if (indexCtrlFirstStopRef.current) {
            slideControl.loadSlideToCanvas(nowIndex);
        } else {
            indexCtrlFirstStopRef.current = true;
        }
    }, [nowIndex])

    useEffect(() => {
        if (saveFirstStopRef.current) {
            slideControl.saveSlide();
        } else {
            saveFirstStopRef.current = true;
        }
        
    },[changeSaveSlide])

    const mouseDown = (e) => {
        flagCanvasDraw.myDown(e, dragok, setDragok, listFlag, setListFlag, setStartX, setStartY);
    }

    const mouseUp = (e) => {
        flagCanvasDraw.myUp(e, setDragok, listFlag, setListFlag);
    }

    const mousemove = (e) => {
        flagCanvasDraw.myMove(e, dragok, listFlag, setListFlag, startX, setStartX, startY, setStartY);
    }

    return (
        <div id='canvasLayerBox'>
            <canvas ref={canvasFlagRef} id='canvasFlag' onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mousemove}></canvas>
            <canvas ref={canvasMainRef} id='canvasMain'></canvas>
            <canvas ref={canvasSubmitRef} id='canvasSubmit'></canvas>
        </div>
    );
};