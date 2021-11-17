import React from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

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

const FaceBookLogin = ({ socialLogin }) => {
  //* FUNCTIONS
  const responseFB = (response) => {
    const userData = {
      oAuthId: Number(response.id.substring(0, 7)),
      email: response.email,
    };
    socialLogin(userData);
  };
  return (
    <>
    <FacebookLogin
      appId="3176754412608143"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFB}
      render={(renderProps) => (
        <div type="button" onClick={renderProps.onClick}>
          <ButtoninnerText>Login with Facebook</ButtoninnerText>
        </div>
      )}
    />
    </>
  );
};
export default FaceBookLogin;