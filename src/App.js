import './App.css';

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
