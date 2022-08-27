import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input.attrs((props) => ({
  // we can define static props
  type: 'text',
  // or we can define dynamic ones
  size: props.size || '1rem',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Input = () => {
  return <StyledInput />;
};

export default Input;
