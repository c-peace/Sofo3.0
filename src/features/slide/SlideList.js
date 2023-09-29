import './SlideList.css'
import image from '/workspaces/Sofo3.0/src/assets/defaultSheet.png';

export default function SlideList() {
    return (
        <div id='listView'>
            <SlideForm />
        </div>
    );
}

function SlideForm() {
    return  <div>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
        <img src={image} id="addSlide" onclick="controlSlide(id)"></img>
    </div>;
}
