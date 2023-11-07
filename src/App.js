import './App.css';
import './assets/fontello-546e7703/css/fontello-embedded.css'

import Nav from './features/nav/Nav.js';
import MainLayer from './screenLayer/MainLayer.js';

export default function App() {
  return (
    <div id='sofoView'>
      <Nav />
      <MainLayer />
    </div>
  );
}