import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'antd-mobile/dist/antd-mobile.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();


{/* <Router>
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
  </Route>
</Router> */}