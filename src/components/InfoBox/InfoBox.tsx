import React, { ReactNode } from 'react';
import './InfoBox.css';

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
      <div className="infobox-title">{title}</div>
      <div className="infobox-value">{value}</div>
      <div className="infobox-unit">{unit}</div>
    </div>
  );
};

export default InfoBox;
