import './HomePage.css';
import { Link } from 'react-router-dom';
import RegisterPage from './RegisterPage';

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
                <Link className='link' to='/board'>Board</Link>
                <Link className='link' to='/game'>Game</Link>
                <img id='title_img' src='/img/Title_heart.png' />
                <Link className='link' to='/login'>Log In</Link>
                <Link className='link' to='/join'>Join</Link>
            </div>
        </div>
    );
}

function HomeContent(props) {
    return (
        <div className='content_background'>
            <RegisterPage></RegisterPage>
        </div>
    );
}

function HomePage() {
    return (
        <p className='main'>
            <TitleBar></TitleBar>
            <p className='main_content'>
                <div className='empty_ground'>
                    <HomeContent></HomeContent>
                </div>
            </p>
        </p>
    );
}

export default HomePage;