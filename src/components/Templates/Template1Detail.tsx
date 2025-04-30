import React from 'react';
import styles from '../../styles/Pages/Template1Detail.module.scss';
import {useNavigate} from "react-router-dom";

const Template1Detail: React.FC = () => {
    const navigate = useNavigate();

    const handleTemplate1 = () => {
        navigate("/template1");
    }

    return (
        <div className={styles.wrapper}>

            <main className={styles.main}>
                <div className={styles.imageBox}></div>
                <div className={styles.infoBox}>
                    <div className={styles.tag}>#모던심플 #흑백사진 #정적인</div>
                    <h2>[모던심플]</h2>
                    <h3>차분하고 정적인 테마</h3>
                    <p>
                        흑백사진을 참조하시면 더욱 차분하고 정적인 분위기 연출이 가능합니다.<br />
                        화려한 무늬, 레이스 소재의 드레스보다는 실크 소재, 머메이드 라인 드레스에 더 잘 어울리는 디자인입니다.<br />
                        <br />
                        깔끔하고 단조로운 디자인으로 오로지 사진과 내용에만 집중할 수 있는 점이 이 청첩장의 포인트입니다.
                    </p>

                    <div className={styles.detail}>
                        <p><strong>메인 사진 추천:</strong> 흑백사진</p>
                        <p><strong>갤러리 사진 추천:</strong> 흑백, 컬러 무관</p>
                        <p><strong>드레스 라인 추천:</strong> 실크 소재, 머메이드 라인</p>
                    </div>

                    <div className={styles.actionRow}>
                        <button className={styles.previewBtn} onClick={handleTemplate1}>미리보기</button>
                        <button className={styles.attachBtn}>첨부</button>
                    </div>

                    <div className={styles.priceRow}>
                        <span className={styles.price}>25,000원</span>
                        <button className={styles.inquiryBtn}>문의하기</button>
                        <button className={styles.payBtn}>결제</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Template1Detail;
