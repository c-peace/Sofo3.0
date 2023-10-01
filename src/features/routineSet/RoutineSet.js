import './RoutineSet.css'

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
            <RoutineSetItem name={'icon-pencil-alt'} color={'black'} />
            <RoutineSetItem name={'icon-font'} color={'black'} />
        </div>
    );
}

function RoutineSetItem({ name, color }) {
    return <i id='routineSetItem' className={name} style={{ color: { color } }}></i>;
}

function RoutineSetInfo() {
    return (
        <div id='routineSetInfo'>
            <RoutineSetInfoItem name={'Routine Color'} />
            <RoutineSetInfoItem name={'Routine Type'} />
        </div>
    );
}

function RoutineSetInfoItem({name}) {
    return <h1 id='RoutineSetInfoItem'>{name}</h1>;
}