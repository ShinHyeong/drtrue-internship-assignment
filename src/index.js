import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {UserProvider} from "./context/Users";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script>Kakao.init("1d8e6af0be90ae122d1b4843cce8898f");</script>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);