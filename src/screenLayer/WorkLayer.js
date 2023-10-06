import Slide from '/workspaces/Sofo3.0/src/features/slide/Slide.js';
import Canvas from '/workspaces/Sofo3.0/src/features/canvas/Canvas.js';
import CanvasBtnR from '/workspaces/Sofo3.0/src/features/canvasBtnR/CanvasBtnR.js';

export default function WorkLayer() {
  return (
    <div id='workLayer' style={{position:'absolute', display:'flex', flexDirection:'row', zIndex:1}}>
      <Slide />
      <Canvas />
      <CanvasBtnR />
    </div>
  );
}
