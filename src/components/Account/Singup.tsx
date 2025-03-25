import React, { useEffect, useState, useCallback } from "react";
import styles from "../../styles/Pages/account.module.scss";
import axios, {AxiosResponse} from 'axios';

function Singup () {
    const [userId, setUserId] = useState<string>("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPasword] = useState("");
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [certificationNum, setCertificationNum] = useState("");
    const [recommandId, setRecommandId] = useState("");

    const [status, setStatus] = useState<boolean | null>(null); // 중복확인 상태
    const [pwDuplicate, setPwDuplicate] = useState<boolean>(true); // 비밀번호 일치여부ß

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        if(name === "id") setUserId(value);
        if(name === "pw") setPassword(value);
        if(name === "checkPw") setCheckPasword(value);
        if(name === "name") setName(value);
        if(name === "phone") setPhoneNum(value);
        if(name === "certification") setCertificationNum(value);
        if(name === "recommandId") setRecommandId(value);
    };

    // 아이디 중복확인 로직
    const handleDuplicate = useCallback((event: React.FormEvent) => {
        event.preventDefault(); //form의 기본 제출 이벤트 방지

        axios.post("http://localhost:8080/users/check-id", null, {
            params: { userId } //GET 요청에서는 params 사용
        })
            .then(response => {
            if(response.data) {
                setStatus(false);
            } else{
                setStatus(true);
            }
        })
    .catch(error => {
            console.error("중복확인 요청 중 오류 발생:", error);
            alert("중복확인 요청 중 오류 발생");
        });
    }, [userId, status]);

    // 상태 변경 시에만 alert 출력
    useEffect(() => {
        if(status === null) return;
         alert(status ? `${userId} 사용 가능` : "중복된 아이디");
    }, [status]);

    // 비밀번호 일치여부 확인
    useEffect(() => {
        setPwDuplicate(password === checkPassword);
    }, [password, checkPassword]); // 둘 중 하나가 바뀔 때만 실행

    // 회원정보 저장 로직
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    }

    return (
        <div>
            <h2 className={styles.formTitle}>회원가입</h2>

            <div className={styles.formBox}>

                <form className={styles.frmSignup} onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td className="styles.inputTitle">
                                <label>아이디</label>
                            </td>
                            <td>
                                &nbsp;&nbsp;
                                <input type="text" size={38} name="id" onChange={handleChange}/>
                            </td>
                            <td width="10px"></td>
                            <td>
                                <button type="button" onClick={handleDuplicate}>중복확인</button>
                            </td>
                        </tr>

                        <tr>
                            <td height="20px"></td>
                        </tr>

                        <tr>
                            <td className="styles.inputTitle">
                                <label>비밀번호</label>
                            </td>
                            <td>
                                &nbsp;&nbsp;
                                <input type="password" size={38} name="pw" onChange={handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td height="10px"></td>
                        </tr>

                        <tr>
                            <td className="styles.inputTitle">
                                <label>비밀번호 확인</label>
                            </td>
                            <td>
                                &nbsp;&nbsp;
                                <input type="password" size={38} name="checkPw" onChange={handleChange}/>
                            </td>
                            <td width="10px"></td>
                            <td className={styles.pwCheck}>
                                {checkPassword.length > 0 && (pwDuplicate ? <span
                                        style={{color: "green"}}>✅ 일치</span> : <span style={{color: "red"}}>❌ 불일치</span>
                                )}
                            </td>
                        </tr>

                        <tr>
                            <td height="20px"></td>
                        </tr>

                        <tr>
                            <td className="styles.inputTitle">
                                <label>이름</label>
                            </td>
                            <td>
                                &nbsp;&nbsp;
                                <input type="text" size={38} name="name" onChange={handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td height="20px"></td>
                        </tr>

                        <tr>
                            <td className="styles.inputTitle">
                                <label>전화번호</label>
                            </td>
                            <td>
                                &nbsp;&nbsp;
                                <input type="number" size={38} name="phone" onChange={handleChange}/>
                            </td>
                            <td width="10px"></td>
                            <td>
                                <button>인증번호</button>
                            </td>
                        </tr>

                        <tr>
                            <td height="20px"></td>
                        </tr>

                        <tr>
                            <td className="styles.inputTitle">
                                <label>인증번호</label>
                            </td>
                            <td>
                                &nbsp;&nbsp;
                                <input type="number" size={38} name="certification" onChange={handleChange}/>
                            </td>
                            <td width="10px"></td>
                            <td>
                                <button>확인</button>
                            </td>
                        </tr>

                        <tr>
                            <td height="30px"></td>
                        </tr>

                        <tr>
                            <td className="styles.inputTitle">
                                <label>추천인 아이디</label>
                            </td>
                            <td>
                                &nbsp;&nbsp;
                                <input type="number" size={38} name="recommandId" onChange={handleChange}/>
                            </td>
                            <td width="10px"></td>
                            <td>
                                <button>확인</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div className={styles.acBtn}>
                        <button type="submit" className={styles.btnLogin}>회원가입</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Singup;