import React from 'react';
import styles from '../../styles/Layout/Header.module.scss';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.headAll}>
            <p className={styles.title} onClick={() => navigate("/")} >Being US</p>

            <nav className={styles.nav}>
                <p id={styles.category}>카테고리</p>
                <p id={styles.tutorial} onClick={() => navigate("/tutorial")}>진행방법</p>
                <p id={styles.qna} onClick={() => navigate("/qna")}>Q&A</p>
            </nav>

            <div className={styles.accountContainer}>
                <Link to="/kakao" className={styles.account}>
                    <img src="/img/kakao_login_small.png" alt="kakao"/>
                </Link>
                {/*<img src="/images/line.png" alt="user" className={styles.line}/>*/}
                {/*<p>username</p>*/}
                {/*<p>로그아웃</p>*/}
            </div>
        </header>
    );
};

export default Header;