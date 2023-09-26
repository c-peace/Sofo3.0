import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <h1 id='logo'>Sofo</h1>
            <div id='linkBtnBox'>
                <a title='Home' className='linkBtn' href="http://intro.sofomusic.com" target='_blank'>Home</a>
                <a className='linkBtn' href="http://intro.sofomusic.com" target='_blank'>Sample</a>
                <a className='linkBtn' href="http://intro.sofomusic.com" target='_blank'>FeedBack</a>
                <a className='linkBtn' href="http://intro.sofomusic.com" target='_blank'>Tutorial</a>
            </div>
        </nav>
    );
}
