import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import KaKaoLogin from 'react-kakao-login';

//* STYLED_COMPONENTS
const ButtoninnerText = styled.div`
  font-size: 16px;
  font-weight: 550;
  color: #525252;
  cursor: pointer;
`;

const KakaoLogin = ({ socialLogin }) => {
  //* FUNCTIONS
  const responseKakao = (response) => {
    const { id } = response.profile;
    const { email } = response.profile.kakao_account;
    const userData = {
      oAuthId: id,
      email,
    };
    socialLogin(userData);
  };

  //* RENDER
  return (
    <>
      <KaKaoLogin
        token="dbffe5ff113e509cae44af75348b8c55"
        onSuccess={responseKakao}
        // eslint-disable-next-line no-console
        onFail={console.error}
        // eslint-disable-next-line no-console
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