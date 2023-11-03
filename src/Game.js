import './Game.css'
import TitleBar from './TitleBar';

function Game() {
    return (
        <div>
            <TitleBar state={'game'} ></TitleBar>
            Let's Check the score!
        </div>
    );
}

export default Game;