import './MainLayer.css'

import Slide from '/workspaces/Sofo3.0/src/features/slide/Slide.js';
import Canvas from '/workspaces/Sofo3.0/src/features/canvas/Canvas.js';
import CanvasBtnR from '/workspaces/Sofo3.0/src/features/canvasBtnR/CanvasBtnR.js';

export default function MainLayer() {
  return (
    <div id='mainLayer'>
      <Slide />
      <Canvas />
      <CanvasBtnR />
    </div>
  );
}
