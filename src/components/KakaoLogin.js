import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import KaKaoLogin from 'react-kakao-login';
import { useUserState, useUserDispatch } from "../context/Users";

//* STYLED_COMPONENTS
const ButtoninnerText = styled.div`
  font-size: 16px;
  font-weight: 550;
  color: #525252;
  cursor: pointer;
`;

const KakaoLogin = ({ socialLogin }) => {
  //* FUNCTIONS
  const dispatch = useUserDispatch();

  const responseKakao = (response) => {
    const { id } = response.profile;
    const { email } = response.profile.kakao_account;
    const userData = {
      oAuthId: id,
      email,
    };
    socialLogin(userData);
    
    dispatch({
      type: "LOGIN",
      userId: userData.oAuthId,
    });
    alert("로그인");
  };

  //* RENDER
  return (
    <>
      <KaKaoLogin
        token="0e8edec160fc44b7062d9dff2977aedc"
        onSuccess={responseKakao}        // eslint-disable-next-line no-console
        onFail={console.error}        // eslint-disable-next-line no-console
        onLogout={console.info}
      >
        <ButtoninnerText>Login with Kakao</ButtoninnerText>
      </KaKaoLogin>
    </>
  );
};

//* PROP_TYPES
KakaoLogin.defaultProps = {
  socialLogin: () => null,
};
KakaoLogin.propTypes = {
  socialLogin: PropTypes.func,
};
export default KakaoLogin;