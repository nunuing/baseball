import { Link } from 'react-router-dom';
import './TitleBar.css'

function TitleBar(props) {
    const state = props;
    console.log(state.name);
    return (
        <div id='title_bar'>
            <div className='background'>
                <img id='cloud1' src='/img/cloud.png' alt='cloud' />
                <img id='cloud2' src='/img/cloud.png' alt='cloud'/>
                <img id='cloud3' src='/img/cloud.png' alt='cloud'/>
                <img id='cloud4' src='/img/cloud.png' alt='cloud'/>
            </div>
            <div className='title_navi'>
                <Link className='link' id='link_board' to='/board'>Board</Link>
                <Link className='link' id='link_game' to='/game'>Game</Link>
                <Link id='link_home' to='/'><img id='title_img' src='/img/Title_heart.png' alt='Title_image'/></Link>
                <Link className='link' to='/login'>Log In</Link>
                <Link className='link' to='/join'>Join</Link>
            </div>
        </div>
    );
}

export default TitleBar;