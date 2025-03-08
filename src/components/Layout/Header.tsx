import React from 'react';
import styles from '../../styles/Layout/Header.module.scss';

const Header = () => {

    return (
        <header className={styles.headAll}>
            <p className={styles.title}>Being US</p>

            <nav className={styles.nav}>
                <p>카테고리</p>
                <p>진행방법</p>
                <p>Q&A</p>
            </nav>

            <div className={styles.accountContainer}>
                <p>로그인</p>
                <p>회원가입</p>
            </div>
        </header>
    );
};

export default Header;