import WorkLayer from "./WorkLayer";
import SetLayer from "./SetLayer";
import './MainLayer.css';
import { useState } from "react";

export default function MainLayer() {

    const [isRotated, setRotated] = useState(false);

    return (
        <div id="mainLayer">
            <WorkLayer isRotated={isRotated} />
            <SetLayer isRotated={isRotated} setRotated={setRotated} />
        </div>
    );
}