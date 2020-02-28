import React, { Fragment } from 'react';
import FIcon from '../../icons/facebook.svg';
import GIcon from '../../icons/github.svg';
import TIcon from '../../icons/twitter.svg';

import st from './style.scss';

const SIZE = 25;

export default () => (

  <div className={st.footer}>
    
    <ul className={st.list}>
      <li>
        <FIcon width={`${SIZE}px`} height={`${SIZE}px`}/>
      </li>

      <li>
        <GIcon width={`${SIZE}px`} height={`${SIZE}px`}/>        
      </li>

      <li>
        <TIcon width={`${SIZE}px`} height={`${SIZE}px`}/>
      </li>

    </ul>

  </div>
)