import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import style from './components/global/styles.scss';

import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App title={title} />,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

module.hot.accept();
