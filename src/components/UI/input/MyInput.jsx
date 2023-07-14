import React from 'react';
import classStyle from "./MyInput.module.css"

const MyInput = (props) => {
  return (
    <input className={classStyle.myInput} {...props}/>
  );
};

export default MyInput;
