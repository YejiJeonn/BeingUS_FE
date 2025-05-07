import React from 'react';
import styles from '../../styles/Pages/listPages.module.scss';
import { Link } from 'react-router-dom';

const templates = [
    {
        id: 1,
        name: '모던 클래식 청첩장',
        image: '/images/template1.jpg',
    },
    {
        id: 2,
        name: '로맨틱 핑크 청첩장',
        image: '/images/template2.jpg',
    },
    {
        id: 3,
        name: '빈티지 스타일 청첩장',
        image: '/images/template3.jpg',
    },
    // 필요시 추가 가능
];

const AllTemplate = () => {

    return (
        <div className={styles.listWrapper}>
            <h2 className={styles.pageTitle}>전체 템플릿</h2>
            <div className={styles.grid}>
                {templates.map((template) => (
                    <Link to={`/templates/${template.id}`} key={template.id} className={styles.card}>
                        <img src={template.image} alt={template.name} />
                        <p className={styles.templateName}>{template.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllTemplate;