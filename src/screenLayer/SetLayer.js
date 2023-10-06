import ExportSet from "../features/exportSet/ExportSet";
import RoutineSet from "../features/routineSet/RoutineSet";
import Guide from "../features/guide/Guide";
import './SetLayer.css'

export default function SetLayer({isRotated, setRotated}) {
    return (
        <div id="setLayer">
            <RoutineSet />
            <Guide />
            <ExportSet isRotated={isRotated} setRotated={setRotated}/>
        </div>
    );
}