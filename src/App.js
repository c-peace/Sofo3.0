import './App.css';
import '/workspaces/Sofo3.0/src/assets/fontello-546e7703/css/fontello-embedded.css'

import Nav from './features/nav/Nav.js';
import MainLayer from './screenLayer/MainLayer.js';

export default function SofoView() {
  return (
    <div id='sofoView'>
      <Nav />
      <MainLayer />
    </div>
  );
}
