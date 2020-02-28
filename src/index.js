import React from 'react';
import ReactDOM from 'react-dom';
import style from './components/global/styles.scss'

import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
);

module.hot.accept();
