export default class FlagRectEngine {

    static rect(ctxFlag, flagData, isColorApplied, isTypeApplied) {
        const ctx = ctxFlag;
        ctx.save();
        ctx.beginPath();
        // inner fill
        ctx.fillStyle = flagData.fillStyle;
        ctx.fillRect(flagData.x, flagData.y, flagData.width, flagData.height);
        // outline
        ctx.lineWidth = 3;
        ctx.strokeRect(flagData.x, flagData.y, flagData.width, flagData.height);
        // text
        ctx.textAlign = 'center';
        ctx.font = 'bold 37px Arial';
    
        let element = flagData.name;
        if (isColorApplied) {
            ctx.fillStyle = this.#flagColorEngine(element);
        } else {
            ctx.fillStyle = 'red';
        }
    
        if (isTypeApplied) {
            element = this.#flagTypeEngine(element);
        }
    
        ctx.fillText(element, flagData.x + 25, flagData.y + 39);
        ctx.restore();
    }

    static #flagColorEngine(element) {
        switch (element) {
            case 'In':
                return 'red'; // Red Color
    
            case 'A':
                return 'orange'; // Orange Color
    
            case 'B':
                return 'green'; // Green Color
    
            case 'I':
                return 'red'; // Red Color
    
            case 'C':
                return 'blue'; // Blue Color
    
            case 'D':
                return 'purple'; // Puple Color
    
            case 'O':
                return 'red'; // Red Color
    
            default:
                alert("Error(mainCanvasDraw, 163): element is not defined");
                break;
        };
    }
    
    static #flagTypeEngine(element) {
        switch (element) {
            case 'In':
                return 'In'; // Red Color
    
            case 'A':
                return 'V'; // Orange Color
    
            case 'B':
                return 'P'; // Green Color
    
            case 'I':
                return 'I'; // Red Color
    
            case 'C':
                return 'C'; // Blue Color
    
            case 'D':
                return 'B'; // Puple Color
    
            case 'O':
                return 'O'; // Red Color
    
            default:
                alert("Error(mainCanvasDraw, 163): element is not defined");
                break;
        };
    }
    
}