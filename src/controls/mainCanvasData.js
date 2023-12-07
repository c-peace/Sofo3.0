import canvasStore from "../stateManage/canvasStore";

export default class MainCanvasData {

    static resetImageValue(target) {
        target.current.value = '';
    }

    static resetNumValue(target) {
        target.current.value = 1;
    }

    static resetTempoValue(target) {
        target.current.value = 110;
    }

    static bringNumValue(target, value) {
        target.current.value = value;
    }

    static bringTempoValue(target, value) {
        target.current.value = value;
    }

    static eraseSongform(list) {
        list.pop();
    }

    static resetSongform(list) {
        list.length = 0;
    }

    static bringSongformValue(list, data) {
        list.length = 0;
        list.push(...data);
    }
}