import React from 'react';
import axios from 'axios';
import styles from '../../styles/Layout/Header.module.scss';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken');

    // 로그아웃
    const handleLogout = () => {
        try {
            const response = axios.post('https://kapi.kakao.com/v1/user/logout', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            });

            localStorage.removeItem('accessToken');
            alert("로그아웃 되었습니다.");
            navigate("/");
        }catch(error){
            console.error("로그아웃 중 오류 발생:", error);
        }
    }

    return (
        <header className={styles.headAll}>
            <p className={styles.title} onClick={() => navigate("/")} >Being US</p>

            <nav className={styles.nav}>
                <p id={styles.category}>카테고리</p>
                <p id={styles.tutorial} onClick={() => navigate("/tutorial")}>진행방법</p>
                <p id={styles.qna} onClick={() => navigate("/qna")}>Q&A</p>
            </nav>

            <div className={styles.accountContainer}>
                    <Link to="/kakao/login" className={styles.account}>
                        <img src="/img/kakao_login_small.png" alt="kakao"/>
                    </Link>
                    <button className={styles.account} onClick={handleLogout}>로그아웃</button>
            </div>
        </header>
    );
};

export default Header;