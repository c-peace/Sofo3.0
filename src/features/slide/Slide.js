import './Slide.css'

import SlideBtn from "./SlideBtn";
import SlideList from "./SlideList";

export default function Slide() {
    return (
        <div id='slideBox'>
            <SlideBtn />
            <SlideList />
        </div>
    );
}
