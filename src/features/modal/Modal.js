import './Modal.css';
import modalStore from '../../stateManage/modalStore';
import sofoLogo from '../../assets/sofoLogo.png';

export default function Modal() {

    const { isAbleModal, setAbleModal } = modalStore();

    if (isAbleModal) {
        return (
            <div id='modalView' onClick={() => setAbleModal()}>
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
                    <h4>🏃 Quick Guide <br /></h4>
                    <p>
                        🏠 서비스 정보를 더 알고싶다면 'Home 버튼' 클릭! <br />
                        🤔 어떻게 사용하는지 모르겠다면 'Tutorial 버튼' 클릭! <br />
                    </p>
                    <br />
                    <hr></hr>
                    <h4>click!</h4>
                </div>
            </div>
        );
    } else {
        return;
    }

}