import { useState } from 'react';
import './ExportSet.css'

export default function ExportSet({isRotated, setRotated}) {
    return (
        <div id='exportSet'>
            <ExportSetInfo />
            <ExportSetBox isRotated={isRotated} setRotated={setRotated}/>
        </div>
    );
}

function ExportSetBox({isRotated, setRotated}) {
    return (
        <div id='exportSetBox'>
            <RotationSet isRotated={isRotated} setRotated={setRotated} />
            <ExportSetItem name={'icon-print'} />
            <ExportSetItem name={'icon-download'} />
        </div>
    );
}

function RotationSet({isRotated, setRotated}) {
    const [rotatedeg, setRotatedeg] = useState(0);

    return <i id='rotationSet' className='icon-doc' style={{transform: `rotate(${rotatedeg}deg)`}} onClick={() => {setRotated(!isRotated); setRotatedeg(isRotated ? 0 : -90)}}></i>
}

function ExportSetItem({ name }) {
    return <i id='exportSetItem' className={name}></i>;
}

function ExportSetInfo() {
    return (
        <div id='exportSetInfo'>
            <ExportSetInfoItem name={'Layout'} />
            <ExportSetInfoItem name={'Print'} />
            <ExportSetInfoItem name={'Save'} />
        </div>
    );
}

function ExportSetInfoItem({ name }) {
    return <h1 id='exportSetInfoItem'>{name}</h1>;
}