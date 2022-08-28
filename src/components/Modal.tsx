import React, { ReactNode } from 'react';

interface IModal {
  children?: ReactNode;
  isHidden?: boolean;
}

const Modal = ({ isHidden, children }: IModal) => {
  return <div hidden={isHidden}>Modal</div>;
};

export default Modal;
