import React, {useCallback } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import useInput from "../components/useInput";
import oc from 'open-color';
import { useUserState, useUserDispatch } from "../context/Users";
import './SocialBox.css';
import KakaoLogin from "../components/KakaoLogin";
import FacebookLogin from "../components/FacebookLogin";
import Instagram  from "../components/InstagramLogin";

//* STYLED_COMPONENTS
const Aligner = styled.div`
margin-top: 1rem;
text-align: right;
`;

const StyledLink = styled(Link)`
color: ${oc.gray[6]};
&:hover {
    color: ${oc.gray[7]};
}
`
const RightAlignedLink = ({to, children}) => (
<Aligner>
    <StyledLink to={to}>{children}</StyledLink>
</Aligner>
);

const InputContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const InputButton = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: white;
  border: none;
  border-radius: 0;
  background-color: #009879;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const InputWithLabel = ({label, ...rest}) => (
  <Wrapper>
      <Label>{label}</Label>
      <Input {...rest}/>
  </Wrapper>
);

function Login() {
  const [id, onChangeId, setId] = useInput("");
  const [pwd, onChangePwd, setPwd] = useInput("");
  const { user } = useUserState();
  const dispatch = useUserDispatch();

//*FUNCTIONS
  const onReset = useCallback(() => {
    setId("");
    setPwd("");
  }, [setId, setPwd]);

  const onLogin = () => {
    if (!id || !pwd) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      return;
    }

    dispatch({
      type: "LOGIN",
      userId: id,
    });

    alert("로그인");
    onReset();
  };

//*RENDER
return (
      <>
      <form>
      <InputContainer>
        <h1>설탕없는 식탁, Dr.True</h1>
        <form>
          <InputWithLabel label="아이디" id="user_id" value={id} onChange={onChangeId} placeholder="아이디를 입력하시오" required/>
          <InputWithLabel label="비밀번호" id="user_pwd" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력하시오" required/>
          <InputButton type="submit" onClick={onLogin}>LOGIN</InputButton>
          <div className="socialBox">
            <div className="kakao">
              <img className="kakaoLogo" src="img/kakao.png" />
              <KakaoLogin></KakaoLogin>
            </div>
            <div className="facebook">
              <img className="facebookLogo" src="img/facebook.png" />
              <FacebookLogin></FacebookLogin>
              </div>
            <div className="naver">
              <img className="naverLogo" src="img/naver.png" />
              <div className="naverText">Login with Naver</div>
            </div>
            <div className="instagram">
              <img className="instagramLogo" src="img/instagram.png" />
              <Instagram></Instagram>
            </div>
          </div>
          <RightAlignedLink to="/signup" style={{textDecoration: 'none'}}>회원가입</RightAlignedLink>
        </form>
      </InputContainer>
      </form>
      </>
  );
}

export default Login;