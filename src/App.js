import './App.css';

import Nav from './features/nav/Nav.js';
import Canvas from './features/canvas/Canvas.js'

export default function SofoView() {
  return (
    <div id='sofoView'>
      <Nav />
      <Canvas />
    </div>
  );
}
