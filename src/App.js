/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { string } from 'prop-types';
// import { Footer } from './components/footer';
import Main from './components/main';

const Footer = loadable(() => import('./components/footer/'));

// const Footer = React.lazy(() => import('./components/footer/footer'));

const App = ({ title }) => {
  App.propTypes = {
    title: string.isRequired,
  };

  return (
    <>
      <div>{title}</div>
      <Main />

      <Suspense fallback={<div>Загрузка...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
