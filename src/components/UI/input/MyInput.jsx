import React from 'react';
import classStyle from "./MyInput.module.css"

const MyInput = React.forwardRef((props, ref) => {
    return (
      <input ref={ref} className={classStyle.myInput} {...props}/>
    );
  })
;

export default MyInput;
