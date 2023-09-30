import WorkLayer from "./WorkLayer";
import SetLayer from "./SetLayer";
import './MainLayer.css';

export default function MainLayer() {
    return (
        <div id="mainLayer">
            <WorkLayer />
            <SetLayer />
        </div>
    );
}