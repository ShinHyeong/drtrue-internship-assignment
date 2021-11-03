import React from "react";
import { useUserState } from "../context/Users";
import SiteInfo from "../SiteInfo";

const Home = () => {
  const { user } = useUserState();

  return (
    <div>
      <h3>{user.userId}님 환영합니다.</h3>
      <SiteInfo />
    </div>
  );
};

export default Home;