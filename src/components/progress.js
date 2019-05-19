import React from 'react';

const Progress = ({ level, className }) => (
  <div className={`${className} progress-bar-wrapper`}>
    <div style={{ width: `${level * 100}%` }} className="progress-bar" />
  </div>
);

export default Progress;
