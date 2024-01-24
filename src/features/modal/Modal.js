import './Modal.css';
import modalStore from '../../stateManage/modalStore';

export default function Modal() {

    const { isAbleModal, setAbleModal } = modalStore();

    if (isAbleModal) {
        return (
            <div id='modalView' onClick={() => setAbleModal()}>
                <h1>Sofo</h1>
                <h3>🚀 Sofo는 찬양팀의 <big> 신속 & 정확한 </big> 소통을 돕는 서비스입니다.</h3>

                <p>
                    📄 송폼(songform) 전달의 어려움이 있지는 않나요? <br />
                    ✍🏻 송폼(songform) 정리의 어려움이 있지는 않나요? <br />
                    🗣️ 찬양팀 내 소통의 어려움이 있지는 않나요? <br />
                </p>
                <br />
                <br />
                <h3>
                    ✨ Sofo Score 와 Sofo Tool로 해결할 수 있습니다 ✨
                </h3>
                <p>
                    ✦ Sofo Score이란? : Sofo 솔루션을 담은 " 새로운 악보 Form " <br />
                    ✦ Sofo Tool이란? : 누구나 이용가능한 간편한 " 맞춤형 제작 도구 " <br />
                </p>
                <br />
                <hr></hr>
                <p>아무곳이나 클릭!</p>

            </div>
        );
    } else {
        return;
    }

}