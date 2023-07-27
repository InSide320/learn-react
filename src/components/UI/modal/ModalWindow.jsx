import React from 'react';
import styleModalWindow from './ModalWindow.module.css';

const ModalWindow = ({children, visible, setVisible}) => {

  const rootClasses = [styleModalWindow.modalWindow];

  if (visible) {
    rootClasses.push(styleModalWindow.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styleModalWindow.modalWindowContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
