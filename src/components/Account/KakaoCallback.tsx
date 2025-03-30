import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// 인가코드 처리 및 사용자 정보 불러오기
const KakaoCallback = () => {
    const location = useLocation();   // 현재 페이지의 정보

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);   // location.search: 현재 URL에서의 쿼리파라미터
        const code = queryParams.get("code");   // URL에서 인가코드 추출

        if(code) {
            getAccessToken(code);   // 인가코드 활용하여 토큰 발급
        }
    }, [location]);

    // 토큰 요청 api 호출
    const getAccessToken = async(code:string) => {
        try{
            const response = await axios.post('https://kauth.kakao.com/oauth/token', null, {
                params: {
                    grant_type: 'authorization_code',
                    client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
                    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
                    code: code
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            const accessToken = response.data.access_token;
            localStorage.setItem('accessToken', accessToken);
        } catch (error) {
            console.error("토큰 요청 중 오류 발생:", error);
        }
    }

    const getUserInfo = async(accessToken:string) => {
        try{
            const response = await axios.get('https://kapi.kakao.com/v2/user/me',{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const userInfo = response.data;
            console.log(userInfo);
        } catch (error){
            console.error("사용자 정보 요청 중 오류 발생:", error);
        }
    }

    return (
        <div>로그인 중...</div>
    );
}

export default KakaoCallback;