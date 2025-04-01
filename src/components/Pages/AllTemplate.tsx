import React from 'react';
import styles from '../../styles/Pages/listPages.module.scss';

const AllTemplate = () => {

    return (
        <div>
            <h2 className={styles.pagesTitle}>전체 템플릿</h2>

            <div className={styles.listContainer}>
            {/*  db에 저장된 내역 불러오기  */}
            {/*  이미지, 제목, 해시태그(4개) 순  */}
            </div>
        </div>
    );
};

export default AllTemplate;