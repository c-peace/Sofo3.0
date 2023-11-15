import './SlideBtn.css'
import defaultSheet from '../../assets/defaultSheet.png'
import slideStore from '../../stateManage/slideStore';

export default function SlideBtn() {
    const { listSlide, setAddListSlide, setDelListSlide } = slideStore();

    function slideHandler(trigger) {
        switch (trigger) {
            case 'add':
                setAddListSlide({
                    id: listSlide.length,
                    mainImage: '',
                    submitImage: defaultSheet,
                    flagList: [],
                    edit: true
                });
                break;

            case 'del':
                setDelListSlide();
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