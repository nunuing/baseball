import './Board.css'
import TitleBar from './TitleBar';

function Board() {
    return (
        <div className='main'>
            <TitleBar state={'board'} ></TitleBar>
            <div className='board_main'>
                <div className='board_ground'>
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