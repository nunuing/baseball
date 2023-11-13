import { Link } from 'react-router-dom';
import './Board.css'
import TitleBar from './TitleBar';

function BoardPosts() {
    const numbers = ["No.", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const titles = ["Title", "5위 잡으러 갈건데 긴장하셔야 될 듯?", "우린 언제 이겨보죠?", "11연승 뒤에 5연패? 냉온탕 실화냐?",
        "2위는 적응이 살짝 안돼요...ㅜ", "오스틴 여권 태우러 갈 파티원 구합니다 (1/100)", "언제 여기까지 내려왔죠? 하하하하하하하하", "진짜 근데 우리 리빌딩 되고 있는거 맞는 것 같아요.",
        "아 내일 5위로 내려가면 안되는데... 불안하네요", "4위 올라갈 수 있겠네요 ㅋㅋㅋㅋㅋㅋㅋㅋ", "정후야 돌아와 너뿐이다"];
    const writers = ["Writer", "호랑이기운쑥쑥", "왕조삼성", "최강곰돌쓰", "쓱이겨버려", "엘쥐짱이쥐", "최강갈매기", "행복야구포에버", "우승단디잡아라", "우승마법사", "큠에진심"];
    const clicks = ["Clicks", "9583", "7643", "5463", "2313", "959", "781", "546", "234", "42", "32"];
    const likes = ["♥", "11", "8", "6", "5", "4", "2", "1", "1", "1", "0"];

    const content_list = [];
    for (let i = 0; i < numbers.length; i++) {
        content_list.push(<div className='posts' id={'post' + (i + 1)}>
            <span className='board_number'>{numbers[i]}</span>
            <span className='board_title'>{titles[i]}</span>
            <span className='board_writer'>{writers[i]}</span>
            <span className='board_click'>{clicks[i]}</span>
            <span className='board_like' id={'like' + i}>{likes[i]}</span>
        </div>);
    }

    return content_list;
}

function PageList() {
    const pages = ["<<", "<", "1", "2", "3", "4", "5", ">", ">>"];
    const page_list = pages.map((num) => (<span className='list_number'>{num}</span>));
    return <div className='page_list'>{page_list}</div>;
}

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
                            <BoardPosts></BoardPosts>
                            <PageList></PageList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;