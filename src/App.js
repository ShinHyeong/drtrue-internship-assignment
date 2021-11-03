import React from "react"; 
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import SiteInfo from "./SiteInfo";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import {useUserState} from "./context/Users"

function App() {
  const { user } = useUserState();

  return (
  <div>
    {user ? (
      <Switch>
        <Route exact path="/" component={Home} /> {/*로그인성공*/}
        <Route path="/siteinfo" component={SiteInfo} /> {/*API 정보 테이블*/}
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} /> {/*로그인*/}
          <Route path="/signup" component={SignUp} /> {/*회원가입*/}
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    )}
  </div>
  );
}
 
export default App;