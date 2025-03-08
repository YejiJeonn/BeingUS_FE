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

function AppContent() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
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
