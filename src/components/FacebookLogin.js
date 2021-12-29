import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
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

const FaceBookLogin = ({ socialLogin }) => {
  //* FUNCTIONS
  const dispatch = useUserDispatch();

  const responseFB = (response) => {
    var  {id} = [];
    id = String(response.id);
    const userData = {
      oAuthId: Number(id.substring(0, 7)),
      email: response.email,
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

//* PROP_TYPES
FaceBookLogin.defaultProps = {
  socialLogin: () => null,
};
FaceBookLogin.propTypes = {
  socialLogin: PropTypes.func,
};
export default FaceBookLogin;