import styles from "../../styles/Pages/account.module.scss";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2 className={styles.formTitle}>로그인</h2>

            <div className={styles.formBox}>

                <form className={styles.frmLogin}>
                    <div>
                        <label>아이디</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="id"/>
                    </div>
                    <br/>
                    <div>
                        <label>비밀번호</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="password" size={38} name="pw"/>
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.acBtn}>
                        <button type="submit" id={styles.btnLogin}>로그인</button>
                        <button onClick={() => navigate("/signup")} id={styles.btnSignup}>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;