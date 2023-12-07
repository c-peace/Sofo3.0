import './SlideBtn.css'
import slideStore from '../../stateManage/slideStore';
import SlideControl from '../../controls/slideControl';

export default function SlideBtn() {
    const { listSlide } = slideStore();
    const slideControl = new SlideControl(listSlide);

    function slideHandler(trigger) {
        switch (trigger) {
            case 'add':
                slideControl.addSlide();
                break;

            case 'del':
                slideControl.delSlide();
                break;

            default:
                alert('Error(SlideBtn) : trigger not defined');
                break;
        }
    }

    return (
        <div id="slideBtnBox">
            <SlideDeleteBtn slideHandler={slideHandler} />
            <SlideInsertBtn slideHandler={slideHandler} />
        </div>
    );
}

function SlideInsertBtn({ slideHandler }) {
    return <i className="icon-plus slideBtn" onClick={() => slideHandler('add')}></i>;
}

function SlideDeleteBtn({ slideHandler }) {
    return <i className="icon-minus slideBtn" onClick={() => slideHandler('del')}></i>;
}