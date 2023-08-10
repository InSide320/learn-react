import React from 'react';
import classesStyle from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classesStyle.myBtn}>{children}</button>
  );
};

export default MyButton;
