import React from 'react';
import './App.css';
import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Header from './components/Layout/Header';
import MainPage from './components/MainPage/MainPage';
import Login from "./components/Account/Login";
import Signup from "./components/Account/Singup";
import AllTemplate from "./components/Pages/AllTemplate";
import TutorialPage from "./components/Pages/TutorialPage";
import QnAPage from "./components/Pages/QnAPage";
import RankingPage from "./components/Pages/RankingPage";
import KakaoLogin from "./components/Account/KakaoLogin";

function AppContent() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/kakao" element={<KakaoLogin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/all" element={<AllTemplate />} />
                <Route path="/qa" element={<RankingPage />} />
                <Route path="/tutorial" element={<TutorialPage />} />
                <Route path="/qna" element={<QnAPage />} />
            </Routes>
        </main>
    </div>
  );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
