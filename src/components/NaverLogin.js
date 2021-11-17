import React, { useEffect, useRef } from "react";
import axios from "axios";
import styled from 'styled-components';
import "../page/SocialBox.css";

const ButtoninnerText = styled.div`
padding-top: 12px;
width: 250px;
color: #fff;
font-size: 16px;
font-weight: 550;
text-align: center;
cursor: pointer;
`;

const NaverLogin = () => {
  const naverRef = useRef();
  useEffect(() => {
    const naverScript = document.createElement("script");
    naverScript.src =
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "GWaEJI5bnldoxenBee01",
        callbackUrl: "http://localhost:3000/",
        callbackHandle: true,
        isPopup: false,
        loginButton: {
          color: "green",
          type: 3,
          height:45,
        },
      });
      naverLogin.init();
      naverLogin.logout();
    };
  }, []);

  const handleClick = () => {
    naverRef.current.children[0].click();
}

  return (
    <>=
        <div ref={naverRef} id="naverIdLogin"></div>
        <ButtoninnerText  onClick={handleClick}>Login with Naver</ButtoninnerText>
    </>
    
  )
};

export default NaverLogin;