import { Link } from 'react-router-dom';
import './TitleBar.css'

function TitleBar(props) {
    const state = props.state;
    if (state === 'board') {
        document.documentElement.style.setProperty('--bLink-color', '#FF522D');
        document.documentElement.style.setProperty('--gLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--lLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--jLink-color', '#FFFFFF');
    }
    else if (state === 'game') {
        document.documentElement.style.setProperty('--bLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--gLink-color', '#FF522D');
        document.documentElement.style.setProperty('--lLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--jLink-color', '#FFFFFF');
    }
    else if (state === 'login') {
        document.documentElement.style.setProperty('--bLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--gLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--lLink-color', '#FF522D');
        document.documentElement.style.setProperty('--jLink-color', '#FFFFFF');
    }
    else if (state === 'join') {
        document.documentElement.style.setProperty('--bLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--gLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--lLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--jLink-color', '#FF522D');
    }
    else {
        document.documentElement.style.setProperty('--bLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--gLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--lLink-color', '#FFFFFF');
        document.documentElement.style.setProperty('--jLink-color', '#FFFFFF');
    }
    
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
                <Link className='link' id='link_login' to='/login'>Log In</Link>
                <Link className='link' id='link_join' to='/join'>Join</Link>
            </div>
        </div>
    );
}

export default TitleBar;