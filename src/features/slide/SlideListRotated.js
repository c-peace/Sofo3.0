import './SlideListRotated.css'
import image from '/workspaces/Sofo3.0/src/assets/defaultSheet.png';

export default function SlideListRotated() {

    return (
        <div id='listRotatedView'>
            <SlideFormRotated />
        </div>
    );
}

function SlideFormRotated() {
    return  <div>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
        <img src={image} id="addSlide" alt=''></img>
    </div>;
}
