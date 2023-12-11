import { forwardRef } from 'react';
import './DrawBtns.css';
import canvasStore from '../../stateManage/canvasStore';

export function InputNum({ defaultValue, btnControls }) {
    const { numRef } = canvasStore();

    const onChangeNum = (e) => {
        btnControls('num', e.target.value);
    };

    return <input type="number" ref={numRef} className="canvasBtn btn_input" id="info_num" min="1" max="20" inputMode='numeric' defaultValue={defaultValue} onChange={onChangeNum}></input>;
}

export function DropDownKey({ btnControls }) {

    return <div className="canvasBtn dropdown" id="info_key">

        <div className="dropdown-content-row">

            <div className='options'>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'C')}>C</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Db')}>Db</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'D')}>D</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Eb')}>Eb</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'E')}>E</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'F')}>F</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Gb')}>Gb</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'G')}>G</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Ab')}>Ab</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'A')}>A</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Bb')}>Bb</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'B')}>B</div>
            </div>

            <div className='options'>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Cm')}>Cm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Dbm')}>Dbm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Dm')}>Dm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Ebm')}>Ebm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Em')}>Em</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Fm')}>Fm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Gbm')}>Gbm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Gm')}>Gm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Abm')}>Abm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Am')}>Am</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Bbm')}>Bbm</div>
                <div id='option' className="option-row-small" onClick={() => btnControls('key', 'Bm')}>Bm</div>
            </div>

        </div>

    </div>;
}

export function InputTempo({ defaultValue, btnControls }) {
    const { tempoRef } = canvasStore();

    const onChangeTempo = (e) => {
        btnControls('tempo', e.target.value);
    };

    return <input type="number" ref={tempoRef} className="canvasBtn btn_input" id="info_tempo" min="40" max="240" inputMode='numeric' defaultValue={defaultValue} onChange={onChangeTempo}></input>;
}

export function BtnInfo({ btnControls }) {
    return <div className="canvasBtn" id="info_sheet" onClick={() => btnControls('info')}></div>;
}

export function DropDownSongform({ btnControls }) {
    const { isTypeApplied } = canvasStore();
    if (isTypeApplied) {
        return <div className="canvasBtn dropdown" id="songform">
            <div className="dropdown-content-row">
                <div id='option' className="option-row-big" title="Intro" onClick={() => btnControls('songform', 'In')}>In</div>
                <div id='option' className="option-row-big" title="Verse" onClick={() => btnControls('songform', 'A')}>V</div>
                <div id='option' className="option-row-big" title="Pre-Chorus" onClick={() => btnControls('songform', 'B')}>P</div>
                <div id='option' className="option-row-big" title="Interlude" onClick={() => btnControls('songform', 'I')}>I</div>
                <div id='option' className="option-row-big" title="Chorus" onClick={() => btnControls('songform', 'C')}>C</div>
                <div id='option' className="option-row-big" title="Bridge" onClick={() => btnControls('songform', 'D')}>B</div>
                <div id='option' className="option-row-big" title="Outro" onClick={() => btnControls('songform', 'O')}>O</div>
                <div id='option' className="option-row-big" title="Erase" onClick={() => btnControls('eraseSongform')}>Back</div>
            </div>
        </div>;
    } else {
        return <div className="canvasBtn dropdown" id="songform">
            <div className="dropdown-content-row">
                <div id='option' className="option-row-big" title="Intro" onClick={() => btnControls('songform', 'In')}>In</div>
                <div id='option' className="option-row-big" title="A part" onClick={() => btnControls('songform', 'A')}>A</div>
                <div id='option' className="option-row-big" title="B part" onClick={() => btnControls('songform', 'B')}>B</div>
                <div id='option' className="option-row-big" title="Interlude" onClick={() => btnControls('songform', 'I')}>I</div>
                <div id='option' className="option-row-big" title="C part" onClick={() => btnControls('songform', 'C')}>C</div>
                <div id='option' className="option-row-big" title="D part" onClick={() => btnControls('songform', 'D')}>D</div>
                <div id='option' className="option-row-big" title="Outro" onClick={() => btnControls('songform', 'O')}>O</div>
                <div id='option' className="option-row-big" title="Erase" onClick={() => btnControls('eraseSongform')}>Back</div>
            </div>
        </div>;
    }
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
    const { isTypeApplied } = canvasStore();
    if (isTypeApplied) {
        return <div className="dropdown canvasBtn" id="flag">
            Flag
            <div className="dropdown-content-column">
                <div id='option' className="option-column" title="Intro" onClick={() => btnControls('flag', 'In')}>In</div>
                <div id='option' className="option-column" title="Verse" onClick={() => btnControls('flag', 'A')}>V</div>
                <div id='option' className="option-column" title="Pre-Chorus" onClick={() => btnControls('flag', 'B')}>P</div>
                <div id='option' className="option-column" title="Interlude" onClick={() => btnControls('flag', 'I')}>I</div>
                <div id='option' className="option-column" title="Chorus" onClick={() => btnControls('flag', 'C')}>C</div>
                <div id='option' className="option-column" title="Bridge" onClick={() => btnControls('flag', 'D')}>B</div>
                <div id='option' className="option-column" title="Outro" onClick={() => btnControls('flag', 'O')}>O</div>
                <div id='option' className="option-column" title="Erase" onClick={() => btnControls('eraseFlag')}>Back</div>
            </div>
        </div>;
    } else {
        return <div className="dropdown canvasBtn" id="flag">
            Flag
            <div className="dropdown-content-column">
                <div id='option' className="option-column" title="Intro" onClick={() => btnControls('flag', 'In')}>In</div>
                <div id='option' className="option-column" title="A part" onClick={() => btnControls('flag', 'A')}>A</div>
                <div id='option' className="option-column" title="B part" onClick={() => btnControls('flag', 'B')}>B</div>
                <div id='option' className="option-column" title="Interlude" onClick={() => btnControls('flag', 'I')}>I</div>
                <div id='option' className="option-column" title="C part" onClick={() => btnControls('flag', 'C')}>C</div>
                <div id='option' className="option-column" title="D part" onClick={() => btnControls('flag', 'D')}>D</div>
                <div id='option' className="option-column" title="Outro" onClick={() => btnControls('flag', 'O')}>O</div>
                <div id='option' className="option-column" title="Erase" onClick={() => btnControls('eraseFlag')}>Back</div>
            </div>
        </div>;
    }
}