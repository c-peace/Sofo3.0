import './SlideList.css'
import slideStore from '../../stateManage/slideStore';
import SlideControl from '../../controls/slideControl';
import canvasStore from '../../stateManage/canvasStore';

export default function SlideList() {

    const { listSlide } = slideStore();
    const Slides = listSlide.map((slide) => (<SlideForm key={slide.id} slide={slide} />));

    return (
        <div id='listView'>
            {Slides}
        </div>
    );
}

function SlideForm({ slide }) {
    const { listSlide } = slideStore();
    const slideControl = new SlideControl(listSlide);
    const index = slide.id;

    // edit 중인 slide를 눈에 띄도록 보여주는 border 스타일이다.
    // 아직 다른 기능이 완성이 안되서 일단 적용은 안한 상태이다.
    const imgStyle = {
        border: `2px solid ${slide.edit ? '#6C6C6C' : '#D2BDAB'}`,
    }

    const handlerSlideClick = ( index) => {
        slideControl.saveSlide();
        slideControl.loadSlideToCanvas(index);
    }

    return <img src={slide.submitImage} alt='' onClick={() => handlerSlideClick( index)}></img>
}