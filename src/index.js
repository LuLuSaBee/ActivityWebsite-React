import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './finalwork';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import ScrollToTop from './ScrollToTop'


ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Main />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
