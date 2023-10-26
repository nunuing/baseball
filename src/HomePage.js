import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <p>
            <Link className='link' to='/join'>Join</Link>
        </p>
    );
}

export default HomePage;