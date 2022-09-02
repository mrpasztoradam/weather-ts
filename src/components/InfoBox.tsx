import React, { ReactNode } from 'react';

interface IInfoBox {
  title?: string;
  value?: string | number;
  unit?: string;
  className?: string;
  children?: ReactNode;
}

const InfoBox = ({ title, value, unit, className, children }: IInfoBox) => {
  return (
    <div className={className}>
      <div>{title}</div>
      <div>{value}</div>
      <div>{unit}</div>
    </div>
  );
};

export default InfoBox;
