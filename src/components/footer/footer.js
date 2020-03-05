import React from 'react';
import FIcon from '../../assets/icons/facebook.svg';
import GIcon from '../../assets/icons/github.svg';
import TIcon from '../../assets/icons/twitter.svg';
import bgImg from '../../assets/images/intro-bg-min.jpg';

import st from './style.scss';

const SIZE = 25;

export default () => (
  <div className={st.footer}>
    <ul className={st.list}>
      <li>
        <FIcon width={`${SIZE}px`} height={`${SIZE}px`} />
      </li>

      <li>
        <GIcon width={`${SIZE}px`} height={`${SIZE}px`} />
      </li>

      <li>
        <TIcon width={`${SIZE}px`} height={`${SIZE}px`} />
      </li>

      <li>
        <img
          src={bgImg}
          alt="bg"
          width={`${SIZE}px`}
          height={`${SIZE}px`}
        />
      </li>
    </ul>
  </div>
);
