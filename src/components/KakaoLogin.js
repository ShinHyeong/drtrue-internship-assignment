import React, { Component } from "react";

class KakaoLogin extends Component {
  
    componentDidMount(){
    const kakaoScript = document.createElement("script");
    kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.head.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      window.Kakao.init("1d8e6af0be90ae122d1b4843cce8898f");
      window.Kakao.Auth.createLoginButton({
        container: "kakao-login-btn",
        success: (auth) => {
          console.log("kakao 로그인 완료", auth);
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: (res) => {
              console.log("Kakao 사용자 정보", res);
            },
            fail: (err) =>{
              console.log(err);
            },
          });
        },
        fail: (err) => {
          console.log(err);
        },
      });
    };
  }

  render() {
    return <div id="kakao-login-btn"></div>
  }
}

export default KakaoLogin;