import styles from "../../styles/Pages/account.module.scss";

const Singup = () => {
    return (
        <div>
            <h2 className={styles.formTitle}>회원가입</h2>

            <div className={styles.formBox}>

                <form className={styles.frmSignup}>
                    <div>
                        <label>아이디</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="id"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>중복확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>비밀번호</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="password" size={38} name="pw"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={styles.btnHidden}>중복확인</button>
                    </div>
                    <br/>
                    <div>
                        <label>비밀번호 확인</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="password" size={38} name="checkPw"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={styles.btnHidden}>중복확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>이름</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="name"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={styles.btnHidden}>중복확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>전화번호</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="email"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>인증번호</button>
                    </div>
                    <br/>
                    <div>
                        <label> 인증번호</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="phone"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>추천인 아이디</label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="email"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>확인</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className={styles.acBtn}>
                        <button type="submit" className={styles.btnLogin}>회원가입</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Singup;