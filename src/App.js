import React, { Fragment } from 'react';
import { Footer } from './components/footer';


const App = ({ title }) => {
  return (
    <Fragment>
      <div>{title}</div>
      <Footer />
    </Fragment>
  )  
}


export default App;