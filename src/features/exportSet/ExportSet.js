import './ExportSet.css'

export default function ExportSet() {
    return (
        <div id='exportSet'>
            <ExportSetInfo />
            <ExportSetBox />
        </div>
    );
}

function ExportSetBox() {
    return (
        <div id='exportSetBox'>
            <ExportSetItem name={'icon-doc'} />
            <ExportSetItem name={'icon-print'} />
            <ExportSetItem name={'icon-download'} />
        </div>
    );
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