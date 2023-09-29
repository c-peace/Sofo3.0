import './App.css';
import '/workspaces/Sofo3.0/src/assets/fontello/css/fontello-embedded.css'

import Nav from './features/nav/Nav.js';
import MainLayer from './screenLayer/MainLayer';

export default function SofoView() {
  return (
    <div id='sofoView'>
      <Nav />
      <MainLayer />
    </div>
  );
}
