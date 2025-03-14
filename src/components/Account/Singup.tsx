import React, { useState } from "react";
import styles from "../../styles/Pages/account.module.scss";

function Singup () {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPasword] = useState("");
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [certificationNum, setCertificationNum] = useState("");
    const [recommandId, setRecommandId] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        if(name === "id") setUserId(value);
        if(name === "pw") setPassword(value);
        if(name === "checkPw") setCheckPasword(value);
        if(name === "name") setName(value);
        if(name === "phone") setPhoneNum(value);
        if(name === "certification") setCertificationNum(value);
        if(name === "recommandId") setRecommandId(value);
    }

    return (
        <div>
            <h2 className={styles.formTitle}>회원가입</h2>

            <div className={styles.formBox}>

                <form className={styles.frmSignup}>
                    <div>
                        <label>아이디</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="id" onChange={handleChange}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>중복확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>비밀번호</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="password" size={38} name="pw" onChange={handleChange}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={styles.btnHidden}>중복확인</button>
                    </div>
                    <br/>
                    <div>
                        <label>비밀번호 확인</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="password" size={38} name="checkPw" onChange={handleChange}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={styles.btnHidden}>중복확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>이름</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="name" onChange={handleChange}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={styles.btnHidden}>중복확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>전화번호</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="phone" onChange={handleChange}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>인증번호</button>
                    </div>
                    <br/>
                    <div>
                        <label> 인증번호</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="certification" onChange={handleChange}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>확인</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>추천인 아이디</label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="text" size={38} name="recommandId" onChange={handleChange}/>
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
}

export default Singup;