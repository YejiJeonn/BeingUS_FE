import styles from "../../styles/Pages/listPages.module.scss";
import React from "react";


const QnAPage = () => {

    return (
        <div>
            <h2 className={styles.pagesTitle}>Q&A</h2>

            <div id={styles.listContainer}>
                {/*  질문 답변 게시판  */}
            </div>
        </div>
    );
};

export default QnAPage;