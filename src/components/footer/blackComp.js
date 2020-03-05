import React from 'react';

// eslint-disable-next-line react/prop-types
export default ({ size }) => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
