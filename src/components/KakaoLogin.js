import React from 'react';
import {useHistory} from 'react-router-dom';

const {Kakao} = window;

function KakaoLogin() {
  
  const history = useHistory();
  const KAKAO_LOGIN_API_URL = "http://localhost:3000/";
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${KAKAO_LOGIN_API_URL}`, {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })

        .then(res => res.json())
        .then(res => {
          localStorage.setItem("Kakao_token", res.access_token);
          if (res.access_token) {
            alert("카카오 로그인")
            history.push("/login");
          }
        })
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    }); 
  };

  return (
    <div onClick={kakaoLoginClickHandler}></div>
  )
}

export default KakaoLogin;