import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label<{ checked: boolean }>`
  display: block;
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 30px;
  background: ${({ checked }) => (checked ? '#F5F5F5' : '#D9D9D9')};
  border-radius: 30px;
  position: relative;
  &:after {
    content: '';
    height: 28px;
    width: 28px;
    background: #0093ab;
    border-radius: 28px;
    transition: 0.3s;
    position: absolute;
    left: ${({ checked }) => (checked ? '1px' : '31px')};
    top: 1px;
  }
`;

interface IToggle {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch = ({ isOn, handleToggle }: IToggle) => {
  return (
    <StyledLabel checked={isOn}>
      <input
        id="checkbox"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
    </StyledLabel>
  );
};

export default ToggleSwitch;
