import Slide from '../features/slide/Slide.js';
import Canvas from '../features/canvas/Canvas.js';
import CanvasBtnR from '../features/canvasBtnR/CanvasBtnR.js';
import SlideListRotated from '../features/slide/SlideListRotated';
import './WorkLayer.css'
import canvasStore from "../stateManage/canvasStore.js"

export default function WorkLayer() {

  return (
    <div id='workLayer'>
      <IsRotatedWorkLayer />
    </div>
  );
}

function IsRotatedWorkLayer() {
  const {isRotated} = canvasStore();

  if (isRotated) {
    return <>
      <SlideListRotated />
      <Canvas />
      <div style={{ width: 'var(--size-slideRotatedWidth)', backgroundColor: 'transparent' }}></div>
    </>;

  } else {
    return <>
      <Slide />
      <Canvas />
      <CanvasBtnR />
    </>;
  }
}