import './SlideBtn.css'

export default function SlideBtn() {
    return (
        <div id="slideBtnBox">
            <SlideDeleteBtn />
            <SlideInsertBtn />
        </div>
    );
}

function SlideInsertBtn() {
    return <i className="icon-plus slideBtn"></i>;
}

function SlideDeleteBtn() {
    return <i className="icon-minus slideBtn"></i>;
}