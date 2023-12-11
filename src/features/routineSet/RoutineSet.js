import './RoutineSet.css'
import canvasStore from "../../stateManage/canvasStore"
import MainCanvasDraw from '../../controls/mainCanvasDraw';
import FlagCanvasDraw from '../../controls/flagCanvasDraw';

export default function RoutineSet() {
    return (
        <div id='routineSet'>
            <RoutineSetBox />
            <RoutineSetInfo />
        </div>

    );
}

function RoutineSetBox() {
    return (
        <div id='routineSetBox'>
            <RoutineColorSet name={'icon-pencil-alt'} />
            <RoutineTypeSet name={'icon-font'} />
        </div>
    );
}

function RoutineColorSet({ name }) {
    const { isColorApplied, reverseColorApplied } = canvasStore();

    return <i id='routineSetItem' className={name} style={{ color: isColorApplied ? 'orangered' : 'black' }} onClick={() => reverseColorApplied()}></i>;
}

function RoutineTypeSet({ name }) {
    const { isTypeApplied, reverseTypeApplied } = canvasStore();

    return <i id='routineSetItem' className={name} style={{ color: isTypeApplied ? 'orangered' : 'black' }} onClick={() => reverseTypeApplied()}></i>;
}

function RoutineSetInfo() {
    return (
        <div id='routineSetInfo'>
            <RoutineSetInfoItem name={'Routine Color'} />
            <RoutineSetInfoItem name={'Routine Type'} />
        </div>
    );
}

function RoutineSetInfoItem({ name }) {
    return <h1 id='RoutineSetInfoItem'>{name}</h1>;
}