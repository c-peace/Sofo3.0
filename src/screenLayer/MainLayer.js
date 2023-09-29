import './MainLayer.css'

import Slide from '/workspaces/Sofo3.0/src/features/slide/Slide.js';
import Canvas from '/workspaces/Sofo3.0/src/features/canvas/Canvas.js';

export default function MainLayer() {
  return (
    <div id='mainLayer'>
      <Slide />
      <Canvas />
    </div>
  );
}
