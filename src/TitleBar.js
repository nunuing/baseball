import { Link } from 'react-router-dom';
import './TitleBar.css'

function TitleBar() {
    return (
        <div id='title_bar'>
            <div className='background'>
                <img id='cloud1' src='/img/cloud.png' />
                <img id='cloud2' src='/img/cloud.png' />
                <img id='cloud3' src='/img/cloud.png' />
                <img id='cloud4' src='/img/cloud.png' />
            </div>
            <div className='title_navi'>
                <Link className='link' to='/join'>Board</Link>
                <Link className='link' to='/join'>Game</Link>
                <img id='title_img' src='/img/Title_heart.png' />
                <Link className='link' to='/join'>LogIn</Link>
                <Link className='link' to='/join'>Join</Link>
            </div>
        </div>
    );
}

export default TitleBar;