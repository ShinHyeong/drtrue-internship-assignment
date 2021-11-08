import React from "react";
import { useUserState, useUserDispatch } from "../context/Users";
import SiteInfo from "../SiteInfo";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import oc from 'open-color';

const Aligner = styled.div`
margin-top: 1rem;
text-align: right;
`;

const StyledText = styled.div`
color: ${oc.gray[6]};
&:hover {
    color: ${oc.gray[7]};
}
cursor: pointer;
`
const RightAlignedButton = ({children}) => (
<Aligner>
    <StyledText>{children}</StyledText>
</Aligner>
);

const Home = () => {
  const { user } = useUserState();
  const dispatch = useUserDispatch();
  console.log(user);

  const onLogOut = () => {

    dispatch({
      type: "LOGOUT",
    });

    alert("로그아웃 되었습니다.");
    console.log(user);
  };

  return (
    <div>
      <h3>{user.userId}님 환영합니다.</h3>
      <RightAlignedButton type="submit" onClick={onLogOut}>로그아웃</RightAlignedButton>
      <SiteInfo />
    </div>
  );
};

export default Home;