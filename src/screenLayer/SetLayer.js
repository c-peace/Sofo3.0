import ExportSet from "../features/exportSet/ExportSet";
import RoutineSet from "../features/routineSet/RoutineSet";
import './SetLayer.css'
import canvasStore from "../stateManage/canvasStore.js"

export default function SetLayer() {
  return (
    <div id="setLayer">
      <IsRotatedSetLayer />
      <ExportSet />
    </div>
  );
}

function IsRotatedSetLayer() {
  const { isRotated } = canvasStore()

  if (isRotated) {
    return <div></div>;
  } else {
    return <RoutineSet />
  }
}