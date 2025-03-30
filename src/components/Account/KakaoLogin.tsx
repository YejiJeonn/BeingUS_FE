import React, {useEffect} from 'react';

// 카카오 로그인 및 인가코드 요청
const KakaoLogin = () => {

    useEffect(() => {
        const url = 'https://kauth.kakao.com/oauth/authorize?'
            + 'client_id=' + process.env.REACT_APP_KAKAO_CLIENT_ID
            + '&redirect_uri=' + process.env.REACT_APP_KAKAO_REDIRECT_URI
            + '&response_type=code'
            + '&scope=profile_nickname'
            + '&prompt=login';

        window.location.href = url;
    }, []);
    // // 카카오 로그인은 백엔드에서 돌리는 로직이 아니기 때문에 axios가 아니라 url로 브라우저 이동해야함
    // const getKakaoCode = () => {
    //     try{
    //         window.location.href = url;
    //     } catch (error) {
    //         console.error("카카오 로그인 요청 중 오류 발생:", error);
    //     }
    // };
    //
    // // 페이지 로딩 시 바로 로그인 로직을 실행하고 싶다면 useEffect를 사용
    // useEffect(() => {
    //     getKakaoCode();
    // }, []);

    return (
        <div>로딩 중...</div>
    );
}

export default KakaoLogin;

// https://kauth.kakao.com/oauth/authorize?client_id=2221929c35cfdfc5cb5985bdc4558a3f&redirect_uri=http://127.0.0.1:3000/kakao&response_type=code&scope=profile_nickname