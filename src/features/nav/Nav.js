import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <h1 id='logo'>Sofo</h1>
            <div id='linkBtnBox'>
                <a className='linkBtn' href="http://intro.sofomusic.com" target='_blank' rel='noreferrer'>Home</a>
                <a className='linkBtn' href="https://intro.sofomusic.com/sample" target='_blank' rel='noreferrer'>Sample</a>
                <a className='linkBtn' href="https://forms.gle/uL1nXcotBZctePyC9" target='_blank' rel='noreferrer'>FeedBack</a>
                <a className='linkBtn' href="https://intro.sofomusic.com/tutorial" target='_blank' rel='noreferrer'>Tutorial</a>
            </div>
        </nav>
    );
}
