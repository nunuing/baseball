import './HomeContent.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

function HomeContent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈화면 */}
        <Route path='/' element={<HomePage />} />
        {/* 회원가입 */}
        <Route path='/join' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default HomeContent;
