import './Board.css'
import TitleBar from './TitleBar';

function Board() {
    return(
        <div>
            <TitleBar state={'board'} ></TitleBar>
            Board Page!
        </div>
    );
}

export default Board;