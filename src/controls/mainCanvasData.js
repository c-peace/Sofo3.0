export default class MainCanvasData {

    static resetImageValue(target) {
        target.value = '';
    }

    static resetNumValue(target) {
        target.value = 1;
    }

    static resetKeyValue(target) {
        target.value = 'C';
    }

    static resetTempoValue(target) {
        target.value = 110;
    }

    static eraseSongform(list) {
        list.pop();
    }

    static resetSongform(list) {
        list.length = 0;
    }
}