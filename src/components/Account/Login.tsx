import React, {useState} from "react";
import styles from "../../styles/Pages/account.module.scss";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    // const [userId, setUserId] = useState("");
    // const [password, setPassword] = useState("");
    //
    // const handleChange = (event) => {
    //     const {name, value} = event.target;
    //
    //     // 필드 이름에 따라 상태를 업데이트
    //     if (name === "id") setUserId(value);
    //     if (name === "pw") setPassword(value);
    // };
    //
    // const handleSubmit =  async (event) => {
    //     event.preventDefault();  // 폼 제출 시 새로고침 방지
    //
    //     const data ={
    //       userId: userId,
    //       password: password,
    //     };
    //
    //     try{
    //
    //     }
    // };

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
                        <button type="submit" className={styles.btnLogin}>로그인</button>
                        <br/>
                        <button onClick={() => navigate("/signup")} id={styles.btnSignup}>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;