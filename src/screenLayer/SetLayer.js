import ExportSet from "../features/exportSet/ExportSet";
import RoutineSet from "../features/routineSet/RoutineSet";
import Guide from "../features/guide/Guide";
import './SetLayer.css'

export default function SetLayer({isRotated, setRotated}) {
    return (
        <div id="setLayer">
            <IsRotatedSetLayer isRotated={isRotated} />
            <ExportSet isRotated={isRotated} setRotated={setRotated}/>
        </div>
    );
}

function IsRotatedSetLayer({ isRotated }) {
    if (isRotated) {
      return <div></div>;
  
    } else {
      return <>
            <RoutineSet />
            <Guide />
      </>;
    }
  }