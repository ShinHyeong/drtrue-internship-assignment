import React, {useContext} from "react";
import { UserContext } from "../store/Users";

const Home = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <h3>{context.userId}님 환영합니다!</h3>
      <a href="/siteinfo">API 정보확인</a>
   </div>
  );
}

export default Home;