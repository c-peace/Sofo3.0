export default class FlagCanvasData {

    static resetFlagData(listFlag) {
        listFlag.length = 0;
    }

    static eraseFlagData(listFlag) {
        listFlag.pop();
    }

    static createFlagData(listFlag, flagName) {
        listFlag.push({
            x: Math.floor(Math.random() * 951) + 120,
            y: Math.floor(Math.random() * 100) + 1500,
            width: 50,
            height: 50,
            strokeStyle: "red",
            fillStyle: "white",
            name: flagName,
            isDragging: false
        });
    }

}