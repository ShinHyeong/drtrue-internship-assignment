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

const Home = () => {
  const { user } = useUserState();
  const dispatch = useUserDispatch();
  const onLogOut = () => {
    alert("로그아웃 되었습니다.");
    dispatch({
      type: "LOGOUT",
    });
  };
<RightAlignedLink to="/signup" style={{textDecoration: 'none'}}>회원가입</RightAlignedLink>
        
  
  return (
    <div>
      <h3>{user.userId}님 환영합니다.</h3>
      <RightAlignedLink type="submit" style={{textDecoration: 'none'}} to="/" onClick={onLogOut}>로그아웃</RightAlignedLink>
      <SiteInfo />
    </div>
  );
};

export default Home;