import ExportSet from "../features/exportSet/ExportSet";
import RoutineSet from "../features/routineSet/RoutineSet";
import './SetLayer.css'

export default function SetLayer() {
    return (
        <div id="setLayer">
            <RoutineSet />
            <ExportSet />
        </div>
    );
}