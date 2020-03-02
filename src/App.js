import React, { Fragment } from 'react';
import { Footer } from './components/footer';
import Main from './components/main'


const App = ({ title }) => {
  return (
    <Fragment>
      <div>{title}</div>
      <Main />
      <Footer />
    </Fragment>
  )  
}


export default App;