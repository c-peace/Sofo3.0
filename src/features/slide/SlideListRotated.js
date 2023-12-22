import './SlideListRotated.css'
import SlideControl from '../../controls/slideControl';
import slideStore from '../../stateManage/slideStore';
import { useEffect } from 'react';

export default function SlideListRotated() {

    const { listRotatedSlide } = slideStore();
    const rotatedSlides = listRotatedSlide.map((rotatedSlide) => (<SlideFormRotated key={rotatedSlide.id} rotatedSlide={rotatedSlide} />));

    useEffect(() => {
        

    }, [listRotatedSlide]);

    return (
        <div id='listRotatedView'>
            {rotatedSlides}
        </div>
    );
}

function SlideFormRotated({ rotatedSlide }) {

    const { listSlide, listRotatedSlide } = slideStore();
    const slideControl = new SlideControl(listSlide);
    const index = rotatedSlide.id;

    // edit 중인 slide를 눈에 띄도록 보여주는 border 스타일이다.
    // 아직 다른 기능이 완성이 안되서 일단 적용은 안한 상태이다.
    const imgStyle = {
        border: `2px solid ${rotatedSlide.edit ? '#fc5050' : '#6C6C6C'}`,
    }

    const handlerRotatedSlideClick = (index) => {
        // slideControl.saveSlide();
        // slideControl.loadSlideToCanvas(index);
    }

    return <img src={rotatedSlide.rotatedImage} alt='' style={imgStyle} onClick={() => handlerRotatedSlideClick(index)}></img>
}