import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import useInput from "../components/useInput";
import oc from 'open-color';
import { useUserDispatch, useUserState } from "../context/Users";

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

// 두개가 함께 있을땐 상단에 여백을 줌
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

const ErrorMessage = styled.div`
font-size: 1rem;
color: red;
margin-bottom: 0.25rem;
`;

const InputWithLabel = ({label, ...rest}) => (
  <Wrapper>
      <Label>{label}</Label>
      <Input {...rest}/>
  </Wrapper>
);

const SignUp = ({ history }) => {
const [id, onChangeId, setId] = useInput("");
const [pwd, onChangePwd, setPwd] = useInput("");
const [confirmPwd, onChangeConfirmPwd, setConfirmPwd] = useInput("");
const [errorMessage, setErrorMessage] = useState({
  idError: "",
  pwdError: "",
  confirmPwdError: "",
});
const { idError, pwdError, confirmPwdError } = errorMessage;
const dispatch = useUserDispatch();

const inputRegexs = {
  idReg: /^[A-za-z0-9]{5,15}$/g,
  pwdReg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
};

const validationCheck = useCallback(
  (input, regex) => {
    let isValidate = false;
    if (input === "") {
      isValidate = false;
    } else if (regex.test(input)) {
      isValidate = true;
    } else {
      isValidate = false;
    }
    return isValidate;
  },
  [pwd, id]
);

const onReset = useCallback(() => {
  setId("");
  setPwd("");
  setConfirmPwd("");
}, [setId, setPwd, setConfirmPwd]);

/* 아이디 체크 */
useEffect(() => {
  if (validationCheck(id, inputRegexs.idReg) || id === "") {
    setErrorMessage({
      ...errorMessage,
      idError: "",
    });
  } else {
    setErrorMessage({
      ...errorMessage,
      idError: "아이디는 영문 또는 숫자로 5~15자 이여야 합니다.",
    });
  }
}, [id]);

/* 비밀번호 체크 */
useEffect(() => {
  if (validationCheck(pwd, inputRegexs.pwdReg) || pwd === "") {
    setErrorMessage({
      ...errorMessage,
      pwdError: "",
    });
  } else {
    setErrorMessage({
      ...errorMessage,
      pwdError:
        "비밀번호는 최소 하나의 문자 및 하나의 숫자로 8자 이상이여야 합니다.",
    });
  }
}, [pwd]);

/* 비밀번호 확인 체크 */
useEffect(() => {
  if (pwd === confirmPwd || confirmPwd === "") {
    setErrorMessage({
      ...errorMessage,
      confirmPwdError: "",
    });
  } else {
    setErrorMessage({
      ...errorMessage,
      confirmPwdError: "비밀번호 확인이 일치하지 않습니다.",
    });
  }
}, [confirmPwd]);

const {userList} = useUserState();
const onSignUp = () => {
  if (!id || !pwd || !confirmPwd) {
    alert("모든 값을 정확하게 입력해주십시오.");
    return;
  }
  if (idError) {
    alert("아이디가 형식에 맞지 않습니다.");
    return;
  } else if (pwdError) {
    alert("비밀번호가 형식에 맞지 않습니다.");
    return;
  } else if (confirmPwdError) {
    alert("비밀번호 확인이 일치하지 않습니다.");
    return;
  }

  dispatch({
    type: "CREATE_USER",
    user: {
      id,
      pwd,
    },
  });

  alert("회원 가입 완료");
  history.push("/");
  onReset();
  console.log(userList);
};

  return (
    <>
    <InputContainer>
      <h1>회원가입</h1>
      <InputWithLabel label="아이디" type="text" value={id} onChange={onChangeId} placeholder="아이디를 입력하시오" required/>
      {idError ? <ErrorMessage>{idError}</ErrorMessage> : ""}
      <InputWithLabel label="비밀번호" type="password" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력하시오" required/>
      {pwdError ? <ErrorMessage>{pwdError}</ErrorMessage> : ""}
      <InputWithLabel label="비밀번호 확인" type="password" value={confirmPwd} onChange={onChangeConfirmPwd} placeholder="비밀번호를 다시 입력하시오" required/>
          {confirmPwdError ? (
            <ErrorMessage>{confirmPwdError}</ErrorMessage>
          ) : (
            ""
          )}
      <form>
      <InputButton type="submit" onClick={onSignUp}>가입</InputButton>
      </form>
      <RightAlignedLink to="/" style={{textDecoration: 'none'}}>로그인 화면으로</RightAlignedLink>
    </InputContainer>
    </>
  );
};

export default SignUp;