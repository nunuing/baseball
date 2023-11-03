import e from 'express';
import './HomePage.css';
import TitleBar from './TitleBar';
function Score_Board() {
    const list_score = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", 
    "BASE", "-", "W", "E", "L", "C", "O", "M", "E", "-", "-", "-", "-",
    "T", "O", "-", "-", "-", "Y", "A", "G", "U", "Y", "A"];
    const list_comp = [];
    
    for (let i = 0; i < list_score.length; i++) {
        list_comp.push(<li className='board_info'>{list_score[i]}</li>);
    }
    return list_comp;
}

function HomePage() {


    return (
        <div className='main'>
            <TitleBar state={'Home'}></TitleBar>
            <div className='main_content'>
                <div className='empty_ground'>
                    <div className='content_background'>
                        <ul className='score_board'>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;