import { Link } from 'react-router-dom';
import './Board.css'
import TitleBar from './TitleBar';

function Board() {
    return (
        <div className='main'>
            <TitleBar state={'board'} ></TitleBar>
            <div className='board_main'>
                <div className='board_ground'>
                    <div className='board_buttons'>
                        <Link className='board_links' to='/write'>Write</Link>
                        <Link className='board_links' >Search</Link>
                    </div>
                    <div className='board_background'>
                        <div className='board_content'>
                            <div className='board_inputs'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;