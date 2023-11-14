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

    static eraseSongform(list) {
        list.pop();
    }

    static resetSongform(list) {
        list.length = 0;
    }
}