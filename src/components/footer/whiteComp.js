import React from 'react';

// eslint-disable-next-line react/prop-types
export default ({ size }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
