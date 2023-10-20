import { forwardRef } from 'react';
import './DrawBtns.css';

export function InputNum({ defaultValue, btnControls }) {
    const onChangeNum = (e) => {
        btnControls('num', e.target.value);
    };

    return <input type="number" className="canvasBtn btn_input" id="info_num" min="1" max="20" inputMode='numeric' defaultValue={defaultValue} onChange={onChangeNum}></input>;
}

export function DropDownKey({ btnControls }) {
    return <div className="canvasBtn dropdown" id="info_key">

        <div className="dropdown-content-row">

            <div className='options'>
                <option className="option-row-small" onClick={() => btnControls('key', 'C')}>C</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Db')}>Db</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'D')}>D</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Eb')}>Eb</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'E')}>E</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'F')}>F</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Gb')}>Gb</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'G')}>G</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Ab')}>Ab</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'A')}>A</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Bb')}>Bb</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'B')}>B</option>
            </div>

            <div className='options'>
                <option className="option-row-small" onClick={() => btnControls('key', 'Cm')}>Cm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Dbm')}>Dbm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Dm')}>Dm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Ebm')}>Ebm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Em')}>Em</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Fm')}>Fm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Gbm')}>Gbm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Gm')}>Gm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Abm')}>Abm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Am')}>Am</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Bbm')}>Bbm</option>
                <option className="option-row-small" onClick={() => btnControls('key', 'Bm')}>Bm</option>
            </div>

        </div>

    </div>;
}

export function InputTempo({ defaultValue, btnControls }) {
    const onChangeTempo = (e) => {
        btnControls('tempo', e.target.value);
    };

    return <input type="number" className="canvasBtn btn_input" id="info_tempo" min="40" max="240" inputMode='numeric' defaultValue={defaultValue} onChange={onChangeTempo}></input>;
}

export function BtnInfo({ btnControls }) {
    return <div className="canvasBtn" id="info_sheet" onClick={() => btnControls('info')}></div>;
}

export function DropDownSongform({ btnControls }) {
    return <div className="canvasBtn dropdown" id="songform">
        <div className="dropdown-content-row">
            <option className="option-row-big" title="Intro" onClick={() => btnControls('songform', 'In')}>In</option>
            <option className="option-row-big" title="A part" onClick={() => btnControls('songform', 'A')}>A</option>
            <option className="option-row-big" title="B part" onClick={() => btnControls('songform', 'B')}>B</option>
            <option className="option-row-big" title="Interlude" onClick={() => btnControls('songform', 'I')}>I</option>
            <option className="option-row-big" title="C part" onClick={() => btnControls('songform', 'C')}>C</option>
            <option className="option-row-big" title="D part" onClick={() => btnControls('songform', 'D')}>D</option>
            <option className="option-row-big" title="Outro" onClick={() => btnControls('songform', 'O')}>O</option>
            <option className="option-row-big" title="Reset" onClick={() => btnControls('eraseSongform')}>Back</option>
        </div>
    </div>;
}

export const UploadImage = forwardRef(function UploadImage({ btnControls }, ref) {
    const style = { input: { display: 'none' } };
    const imageRef = ref;

    const onchangeImage = (e) => {
        btnControls('image', '', e);
    }

    return <label htmlFor='upload'>
        <div className="canvasBtn" id="image">Image</div>
        <input type="file" accept="image/*" ref={imageRef} id="upload" style={style.input} onChange={onchangeImage} />
    </label>;
});

export function DropDownFlag({ btnControls }) {
    return <div className="dropdown canvasBtn" id="flag">
        Flag
        <div className="dropdown-content-column">
            <option className="option-column" title="Intro" onClick={() => btnControls('flag', 'In')}>In</option>
            <option className="option-column" title="A part" onClick={() => btnControls('flag', 'A')}>A</option>
            <option className="option-column" title="B part" onClick={() => btnControls('flag', 'B')}>B</option>
            <option className="option-column" title="Interlude" onClick={() => btnControls('flag', 'I')}>I</option>
            <option className="option-column" title="C part" onClick={() => btnControls('flag', 'C')}>C</option>
            <option className="option-column" title="D part" onClick={() => btnControls('flag', 'D')}>D</option>
            <option className="option-column" title="Outro" onClick={() => btnControls('flag', 'O')}>O</option>
            <option className="option-column" title="Reset" onClick={() => btnControls('eraseFlag')}>Back</option>
        </div>
    </div>;
}