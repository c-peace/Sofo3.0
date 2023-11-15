import defaultSheet from "../assets/defaultSheet.png";
import slideStore from "../stateManage/slideStore";

export default class SlideControl {

    static addNewSlide(listSlide) {
        listSlide.push({
            id: listSlide.length,
            mainImage: '',
            submitImage: defaultSheet,
            flagList: [],
            edit: true
        });

        console.log(listSlide);
    };

}


