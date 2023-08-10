import React from 'react';
import loadStyle from './Loader.module.css';

const Loader = () => {
  return (
    <div className={'wrapper'}>
      <div className={loadStyle.loader}/>
    </div>
  );
};

export default Loader;
