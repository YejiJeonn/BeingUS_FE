import React from 'react';
import styles from '../../styles/Layout/Header.module.scss';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.headAll}>
            <p className={styles.title}>Being US</p>

            <nav className={styles.nav}>
                <p id={styles.category}>카테고리</p>
                <p id={styles.tutorial} onClick={() => navigate("/tutorial")}>진행방법</p>
                <p id={styles.qna} onClick={() => navigate("/qna")}>Q&A</p>
            </nav>

            <div className={styles.accountContainer}>
                <Link to="/login" className={styles.account}>로그인</Link>
                {/*<img src="/images/line.png" alt="user" className={styles.line}/>*/}
                {/*<p>username</p>*/}

                <Link to="/signup" className={styles.account}>회원가입</Link>
                {/*<p>로그아웃</p>*/}
            </div>
        </header>
    );
};

export default Header;