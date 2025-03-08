import React from 'react';
import styles from '../../styles/Pages/MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <p className={styles.slogan}>우리가 되는 순간을 가장 아름답게, <strong>Being US</strong>와 함께 행복한 순간을 함께하세요.</p>

            <div className={styles.notice}>
                <p>안내문</p>
            </div>


            {/* 전체 템플릿 */}
            <div className={styles.list}>
                <div className={styles.listTitle}>
                    <h2>| 전체 템플릿</h2>
                    <button className={styles.moreBtn}>더보기 &gt;</button>
                </div>

                <div className={styles.listContent}>
                    <img/>
                </div>
            </div>


            {/* 랭킹순 템플릿 */}
            <div className={styles.list}>
                <div className={styles.listTitle}>
                    <h2>| Top5</h2>
                    <button className={styles.moreBtn}>더보기 &gt;</button>
                </div>

                <div className={styles.listContent}>
                    <img/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;