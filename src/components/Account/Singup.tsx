import styles from "../../styles/Pages/account.module.scss";

const Singup = () => {
    return (
        <div>
            <h2 className={styles.formTitle}>회원가입</h2>

            <form className={styles.formContainer}>
                <div className={styles.inputGroup}>
                    <label>아이디</label>
                    <input type="text" size={38} name="id"/>
                </div>

                <div className={styles.inputGroup}>
                    <label>비밀번호</label>
                    <input type="password" size={38} name="pw"/>
                </div>

                <div className={styles.inputGroup}>
                    <label>비밀번호 확인</label>
                    <input type="password" size={38} name="checkPw"/>
                </div>

                <div className={styles.inputGroup}>
                    <label>이름</label>
                    <input type="text" size={38} name="name"/>
                </div>

                <div className={styles.inputGroup}>
                    <label>전화번호</label>
                    <input type="text" size={38} name="email"/>
                </div>

                <div className={styles.inputGroup}>
                    <label> 인증번호</label>
                    <input type="text" size={38} name="phone"/>
                </div>

                <div className={styles.inputGroup}>
                    <label>추천인 아이디</label>
                    <input type="text" size={38} name="email"/>
                </div>

                <div className={styles.acBtn}>
                    <button type="submit" id={styles.btnLogin}>회원가입</button>
                </div>
            </form>
        </div>
    );
};

export default Singup;