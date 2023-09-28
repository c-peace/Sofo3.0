import './DrawBtn.css';

export default function DrawBtn() {
    return (
        <div id='btnBox'>
            <input type="number" className="canvasBtn" id="info_num" min="1" max="20" inputMode='numeric' defaultValue={1} ></input>

            <div className="dropdown canvasBtn forward_dropdown" id="info_key">
                <div className="dropdown-content-row">
                    <div id='options'>
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
                    <div >
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
            </div>

        </div>
    );
}