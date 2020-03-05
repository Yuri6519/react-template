/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import loadable from '@loadable/component';
import FIcon from '../../assets/icons/facebook.svg';
import GIcon from '../../assets/icons/github.svg';
import TIcon from '../../assets/icons/twitter.svg';
import bgImg from '../../assets/images/intro-bg-min.jpg';

// import WhiteComp from './whiteComp';

import st from './style.scss';

const SIZE = 25;
const BLACK = 'black';
const WHITE = 'white';

const WhitekAsyncComp = loadable(() => import('./whiteComp'));
const BlackAsyncComp = loadable(() => import('./blackComp'));

export default () => {
  const [comp, setComp] = useState(WHITE);

  const onClick = evt => {
    const newComp = comp === BLACK ? WHITE : BLACK;
    setComp(newComp);
  };

  return (
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
            onClick={onClick}
            style={{ cursor: 'pointer' }}
          />
        </li>

        <li>
          {comp === WHITE ? (
            <WhitekAsyncComp size={SIZE} />
          ) : (
            <BlackAsyncComp size={SIZE} />
          )}
        </li>
      </ul>
    </div>
  );
};
