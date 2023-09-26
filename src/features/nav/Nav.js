import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <h1 id='logo'>Sofo</h1>
            <div id='linkBtnBox'>
                <a className='linkBtn' href="http://intro.sofomusic.com" target='_blank'>Home</a>
                <a className='linkBtn' href="https://intro.sofomusic.com/sample" target='_blank'>Sample</a>
                <a className='linkBtn' href="https://forms.gle/uL1nXcotBZctePyC9" target='_blank'>FeedBack</a>
                <a className='linkBtn' href="https://intro.sofomusic.com/guide" target='_blank'>Tutorial</a>
            </div>
        </nav>
    );
}
