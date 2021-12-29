import React, { useEffect, useRef } from "react";
import axios from "axios";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "../page/SocialBox.css";
import { useUserState, useUserDispatch } from "../context/Users";

//* STYLED_COMPONENTS
const ButtoninnerText = styled.div`
padding-top: 12px;
width: 250px;
color: #fff;
font-size: 16px;
font-weight: 550;
text-align: center;
cursor: pointer;
`;

const NaverLogin = ({ socialLogin }) => {
  //* FOR BUTTON STYLE
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
        isPopup: true,
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
    console.log(socialLogin);
  }
  //* FUNCTION
  const dispatch = useUserDispatch();

  const responseNaver = (response) => {
    const { id } = response.id;
    const { email } = response.email;
    const userData = {
      oAuthId: id,
      email,
    };
    socialLogin(userData);
    
    dispatch({
      type: "LOGIN",
      userId: id,
    });
    alert("로그인");
  };

//* RENDER
  return (
    <>
        <div ref={naverRef} id="naverIdLogin" onSuccess={responseNaver}></div>
        <ButtoninnerText  onClick={handleClick}>Login with Naver</ButtoninnerText>
    </>
  )
};

//* PROP_TYPES
NaverLogin.defaultProps = {
  socialLogin: () => null,
};
NaverLogin.propTypes = {
  socialLogin: PropTypes.func,
};
export default NaverLogin;