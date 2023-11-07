import './HomePage.css';
import TitleBar from './TitleBar';
function ScoreBoard() {
    const list_score = ["", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
        "", "BASE", "-", "W", "E", "L", "C", "O", "M", "E", "-", "-", "-", "-",
        "", "BALL", "T", "O", "-", "-", "-", "Y", "A", "G", "U", "Y", "A", "-"];
    const scoreList = list_score.map((score, index) => <li className='board_info' id={'score' + index} key={index} >{score}</li>);
    return scoreList;
}
function GameInfo() {
    const infos = ["R", "H", "B", "E", "6", "11", "8", "0", "3", "7", "3", "1"];
    const infoList = infos.map((info, index) => <li className='infos' key={index}>{info}</li>);

    return <ul className='game_info'>{infoList}</ul>;
}

function BallInfo() {
    const bInfos = ["S", "", "", "", "B", "", "", "", "O", "", "", ""];
    const bInfoList = bInfos.map((info, index) => <li className='b_infos' id={'b_info' + index} key={index}>{info}</li>);
    return <ul className='ball_info'>{bInfoList}</ul>
}

function HitInfo() {
    const hInfos = ["H", "♥︎", "E", "", "FC", ""];
    const hInfoList = hInfos.map((info, index) => <li className='h_infos' id={'h_info' + index} key={index}>{info}</li>);
    return <ul className='hit_info'>{hInfoList}</ul>
}
function HomePage() {
    return (
        <div className='main'>
            <TitleBar state={'Home'}></TitleBar>
            <div className='main_content'>
                <div className='empty_ground'>
                    <div className='score_content'>
                        <ul className='score_board'>
                            <ScoreBoard></ScoreBoard>
                            <div className='board_bottom'>
                                <GameInfo></GameInfo>
                                <BallInfo></BallInfo>
                                <HitInfo></HitInfo>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;