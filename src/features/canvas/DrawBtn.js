import './DrawBtn.css';

export default function DrawBtn() {
    return (
        <div id='btnBox'>
            <InputNum defaultValue={1} />
            <DropDownKey />
            <InputTempo defaultValue={110} />
            <BtnInfo />
            <DropDownSongform />
            <UploadImage />
            <DropDownFlag />
        </div>
    );
}

function InputNum({ defaultValue }) {
    return <input type="number" className="canvasBtn btn_input" id="info_num" min="1" max="20" inputMode='numeric' defaultValue={defaultValue} ></input>;
}

function DropDownKey() {
    return <div className="canvasBtn dropdown" id="info_key">

        <div className="dropdown-content-row">

            <div className='options'>
                <option className="option-row-small" value="C" >C</option>
                <option className="option-row-small" value="Db" >Db</option>
                <option className="option-row-small" value="D" >D</option>
                <option className="option-row-small" value="Eb" >Eb</option>
                <option className="option-row-small" value="E" >E</option>
                <option className="option-row-small" value="F" >F</option>
                <option className="option-row-small" value="Gb" >Gb</option>
                <option className="option-row-small" value="G" >G</option>
                <option className="option-row-small" value="Ab" >Ab</option>
                <option className="option-row-small" value="A" >A</option>
                <option className="option-row-small" value="Bb" >Bb</option>
                <option className="option-row-small" value="B" >B</option>
            </div>

            <div className='options'>
                <option className="option-row-small" value="Cm" >Cm</option>
                <option className="option-row-small" value="Dbm" >Dbm</option>
                <option className="option-row-small" value="Dm" >Dm</option>
                <option className="option-row-small" value="Ebm" >Ebm</option>
                <option className="option-row-small" value="Em" >Em</option>
                <option className="option-row-small" value="Fm" >Fm</option>
                <option className="option-row-small" value="Gbm" >Gbm</option>
                <option className="option-row-small" value="Gm" >Gm</option>
                <option className="option-row-small" value="Abm" >Abm</option>
                <option className="option-row-small" value="Am" >Am</option>
                <option className="option-row-small" value="Bbm" >Bbm</option>
                <option className="option-row-small" value="Bm" >Bm</option>
            </div>

        </div>

    </div>;
}

function InputTempo({ defaultValue }) {
    return <input type="number" className="canvasBtn btn_input" id="info_tempo" min="40" max="240" inputMode='numeric' defaultValue={defaultValue}></input>;
}

function BtnInfo() {
    return <div className="canvasBtn" id="info_sheet"></div>;
}

function DropDownSongform() {
    return <div className="canvasBtn dropdown" id="songform">
        <div className="dropdown-content-row">
            <option className="option-row-big" value="In" title="Intro" >In</option>
            <option className="option-row-big" value="A" title="A part" >A</option>
            <option className="option-row-big" value="B" title="B part" >B</option>
            <option className="option-row-big" value="I" title="Interlude" >I</option>
            <option className="option-row-big" value="C" title="C part" >C</option>
            <option className="option-row-big" value="D" title="D part" >D</option>
            <option className="option-row-big" value="O" title="Outro" >O</option>
            <option className="option-row-big" title="Reset" >Back</option>
        </div>
    </div>;
}

function UploadImage() {
    const style = { input: { display: 'none' } };

    return <label htmlFor='upload'>
        <div className="canvasBtn" id="image">Image</div>
        <input type="file" accept="image/*" id="upload" style={style.input} />
    </label>;
}

function DropDownFlag() {
    return <div className="dropdown canvasBtn" id="flag">
        Flag
        <div className="dropdown-content-column">
            <option className="option-column" value="In" title="Intro" >In</option>
            <option className="option-column" value="A" title="A part" >A</option>
            <option className="option-column" value="B" title="B part" >B</option>
            <option className="option-column" value="I" title="Interlude" >I</option>
            <option className="option-column" value="C" title="C part" >C</option>
            <option className="option-column" value="D" title="D part" >D</option>
            <option className="option-column" value="O" title="Outro" >O</option>
            <option className="option-column" title="Reset" >Back</option>
        </div>
    </div>;
}