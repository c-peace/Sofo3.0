import './CanvasBtnR.css'

export default function CanvasBtnR() {
    return (
        <div id="CanvasBtnRGroup">
            <BtnForm icon={'icon-sticky-note-o'} name={'Text'} />
            <BtnForm icon={'icon-cw'} name={'Reset'} />
        </div>
    );
}

function BtnForm({icon, name}) {
    return (
        <div id='btnForm'>
            <i id='btnFormId' className={icon}></i>
            <h1 id='btnFormName'>{name}</h1>
        </div>
    );
}