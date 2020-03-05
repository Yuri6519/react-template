import React from 'react';
import { string } from 'prop-types';
import { Footer } from './components/footer';
import Main from './components/main';

const App = ({ title }) => {
  App.propTypes = {
    title: string.isRequired,
  };

  return (
    <>
      <div>{title}</div>
      <Main />
      <Footer />
    </>
  );
};

export default App;
