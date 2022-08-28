import React from 'react';
import styled from 'styled-components';

interface IButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode;
  shape?: 'circle' | 'rectangle';
}

const StyledButton = styled.button.attrs((props: IButton) => ({
  shape: props.shape,
}))`
  background: #ffd124;
  border: none;
  box-shadow: 1px 1px 10px rgba(255, 209, 36, 0.1);
  font-weight: 700;
  color: #006778;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props: IButton) =>
    props.shape?.toString() === 'circle' ? '36px' : '20px'};
  line-height: ${(props: IButton) =>
    props.shape?.toString() === 'circle' ? '44px' : '24px'};
  font-weight: ${(props: IButton) =>
    props.shape?.toString() === 'circle' ? '400' : '700'};
  width: ${(props: IButton) =>
    props.shape?.toString() === 'circle' ? '48px' : '138px'};
  border-radius: ${(props: IButton) =>
    props.shape?.toString() === 'circle' ? '24px' : '8px'};
  text-align: center;

  :hover {
    background: #ffb900;
  }
  :active {
    background: #ffe482;
  }
`;

const Button = ({ shape, children, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick} shape={shape}>
      {children}
    </StyledButton>
  );
};

export default Button;
