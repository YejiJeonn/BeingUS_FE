import React, {useEffect} from 'react';

// 카카오 로그인 및 인가코드 요청
const KakaoLogin = () => {

    // 카카오 로그인은 백엔드에서 돌리는 로직이 아니기 때문에 axios가 아니라 url로 브라우저 이동해야함
    useEffect(() => {
        const url = 'https://kauth.kakao.com/oauth/authorize?'
            + 'client_id=' + process.env.REACT_APP_KAKAO_CLIENT_ID
            + '&redirect_uri=' + process.env.REACT_APP_KAKAO_REDIRECT_URI
            + '&response_type=code'
            + '&scope=profile_nickname'
            + '&prompt=login';

        window.location.href = url;
    }, []);

    return (
        <div>로딩 중...</div>
    );
}

export default KakaoLogin;