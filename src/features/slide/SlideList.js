import './SlideList.css'
import slideStore from '../../stateManage/slideStore';
import SlideControl from '../../controls/slideControl';

export default function SlideList() {

    const { listSlide } = slideStore();
    const slides = listSlide.map((slide) => (<SlideForm key={slide.id} slide={slide} />));

    return (
        <div id='listView'>
            {slides}
        </div>
    );
}

function SlideForm({ slide }) {
    const { listSlide } = slideStore();
    const slideControl = new SlideControl(listSlide);
    const index = slide.id;

    const imgStyle = {
        border: `2px solid ${slide.edit ? '#fc5050' : '#6C6C6C'}`,
    }

    const handlerSlideClick = (index) => {
        slideControl.saveSlide();
        slideControl.loadSlideToCanvas(index);
    }

    return <img src={slide.submitImage} alt='' style={imgStyle} onClick={() => handlerSlideClick(index)}></img>
}