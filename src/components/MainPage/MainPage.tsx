import React, {use} from 'react';
import styles from '../../styles/Pages/MainPage.module.scss';
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.mainPage}>
            <p className={styles.slogan}>우리가 되는 순간을 가장 아름답게, <strong>Being US</strong>와 함께 행복한 순간을 함께하세요.</p>

            <div className={styles.notice} onClick={() => navigate("/tutorial")}>
                <p>안내문</p>
            </div>


            {/* 전체 템플릿 */}
            <div className={styles.list}>
                <div className={styles.listTitle}>
                    <h2>| 전체 템플릿</h2>
                    <button className={styles.moreBtn} onClick={() => navigate("/all")}>더보기 &gt;</button>
                </div>

                <div className={styles.listContent}>
                    <img/>
                </div>
            </div>


            {/* 랭킹순 템플릿 */}
            <div className={styles.list}>
                <div className={styles.listTitle}>
                    <h2>| Top5</h2>
                    <button className={styles.moreBtn} onClick={() => navigate("/ranking")}>더보기 &gt;</button>
                </div>

                <div className={styles.listContent}>
                    <img/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;