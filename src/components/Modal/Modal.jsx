import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Modal = ({ visible, onClose, width, height, animation, children }) => {
  return (
    <Rodal
      visible={visible}
      onClose={onClose}
      width={width}
      height={height}
      animation={animation}
    >
      {children}
    </Rodal>
  );
};

export default Modal;
