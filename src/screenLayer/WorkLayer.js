import Slide from '/workspaces/Sofo3.0/src/features/slide/Slide.js';
import Canvas from '/workspaces/Sofo3.0/src/features/canvas/Canvas.js';
import CanvasBtnR from '/workspaces/Sofo3.0/src/features/canvasBtnR/CanvasBtnR.js';
import CanvasRotated from '../features/canvas/CanvasRotated';
import SlideListRotated from '../features/slide/SlideListRotated';

export default function WorkLayer({ isRotated }) {
  return (
    <div id='workLayer' style={{ position: 'absolute', display: 'flex', flexDirection: 'row', zIndex: 1, backgroundColor: 'transparent' }}>
      <IsRotatedLayer isRotated={isRotated} />
    </div>
  );
}

function IsRotatedLayer({ isRotated }) {
  if (isRotated) {
    return <>
      <SlideListRotated />
      <CanvasRotated />
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