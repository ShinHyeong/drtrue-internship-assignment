import React, {useCallback, useContext, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import useInput from "../components/useInput";

const InputContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
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

function Login() {
  const [id, onChangeId, setId] = useInput("");
  const [pwd, onChangePwd, setPwd] = useInput("");
  
  const onReset = useCallback(() => {
    setId("");
    setPwd("");
  }, [setId, setPwd]);

  const onLogin = () => {
    if (!id || !pwd) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다");
      return;
    }
    alert("로그인");
    onReset();
  };

  return (
      <>
      <form>
      <InputContainer>
        <h1>Dr.True</h1>
        <form>
          <Input id="user_id" value={id} onChange={onChangeId} placeholder="아이디를 입력하시오" required/>
          <Input id="user_pwd" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력하시오" required/>
          <InputButton type="submit" onClick={onLogin}>로그인</InputButton>
          <Link to="/signup" style={{textDecoration: 'none'}}>
            <InputButton type="submit">회원가입</InputButton>
          </Link>
        </form>
      </InputContainer>
      </form>
      </>
  );
}

export default Login;