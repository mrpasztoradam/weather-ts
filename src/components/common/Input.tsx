import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDebounce } from 'usehooks-ts';

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #e9e9e9;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  font-size: 24px;
  text-indent: 1rem;
`;

interface IInput {
  onMOTHAFUKA?: () => void | any;
}

const Input = ({ onMOTHAFUKA }: IInput) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    console.log(debouncedValue.toString());
  }, [debouncedValue]);

  return (
    <>
      <StyledInput type="text" value={value} onChange={handleChange} />
      {/* <div>
        <p>Value real-time: {value}</p>
        <p>Debounced value: {debouncedValue}</p>
      </div> */}
    </>
  );
};

export default Input;
