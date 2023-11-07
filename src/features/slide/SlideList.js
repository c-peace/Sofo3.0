import './SlideList.css'
import image from '../../assets/defaultSheet.png';

export default function SlideList() {
    return (
        <div id='listView'>
            <SlideForm />
        </div>
    );
}

function SlideForm() {
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
