import './Modal.css';
import sofoLogo from '../../assets/sofoLogo.png';
import { useState } from 'react';

export default function Modal() {
    const [modalPage, setModalPage] = useState(0);

    if (modalPage == 0) {
        return (
            <div id='modalView' onClick={() => setModalPage(1)}>
                <div id='modalBox'>
                    <img src={sofoLogo} width={60}></img>
                    <h1>Sofo</h1>
                    <h3>🚀 Sofo는 찬양팀의 <big> 신속 & 정확한 </big> 소통을 돕는 서비스입니다.</h3>

                    <p>
                        📄 송폼(songform) 전달의 어려움이 있지는 않나요? <br />
                        ✍🏻 송폼(songform) 정리의 어려움이 있지는 않나요? <br />
                        🗣️ 찬양팀 내 소통의 어려움이 있지는 않나요? <br />
                    </p>
                    <br />

                    <h3>✨ Sofo로 해결할 수 있습니다 ✨</h3>
                    <br />
                    <br />

                    <h4>🏃 Quick Guide </h4>
                    <p>
                        🏠 서비스 정보를 더 알고싶다면 'Home 버튼' 클릭! <br />
                        🤔 어떻게 사용하는지 모르겠다면 'Tutorial 버튼' 클릭! <br />
                    </p>
                    <br />

                    <hr></hr>
                    <h4>Click!</h4>
                </div>
            </div>
        );
    } else if (modalPage == 1) {
        return (
            <div id='modalView' onClick={() => setModalPage(2)}>
                <div id='modalBox'>
                    <img src={sofoLogo} width={60}></img>
                    <h1>Sofo</h1>
                    <h3>🤔 시작하기 전에 미리 준비해주세요!</h3>
                    <br />
                    <br />

                    <h4>© 악보 복제 라이선스를 준비해 주세요!</h4>
                    <h4>‣ 악보를 복제, 인쇄 하기 위해선 복제 라이선스가 필요합니다!</h4>
                    <br />
                    <br />

                    <h4>💰 악보 원본을 준비해 주세요!</h4>
                    <h4>‣ 작곡가에게 악보료를 지급되는 정직한 ccm문화를 만들어요!</h4>
                    <br />
                    <br />
                    
                    <h4>✦ 우측 상단 Copyright를 참고해주세요!</h4>
                    <br />

                    <hr></hr>
                    <h4>Start!</h4>
                </div>
            </div>
        );
    } else {

    }

}