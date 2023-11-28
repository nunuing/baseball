import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Login from './Login';
import Board from './Board';
import Game from './Game';
import Write from './Write';

function App() {
  const url = 'http://localhost:8000/';
  
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈화면 */}
        <Route path='/' element={<HomePage />} />
        {/* 회원가입 */}  
        <Route path='/join' element={<RegisterPage />}></Route>
        {/* 로그인 */}
        <Route path='/login' element={<Login />}></Route>
        {/* 게시판 */}
        <Route path='/board' element={<Board />}></Route>
        {/* 게시판 - 글쓰기 */}
        <Route path='/write' element={<Write />}></Route>
        {/* 오늘의 경기 */}
        <Route path='/game' element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
