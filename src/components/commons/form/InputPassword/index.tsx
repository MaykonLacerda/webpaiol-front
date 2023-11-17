import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Input, InputProps } from '../Input';

export type InputPasswordProps = InputProps;

export function InputPassword(props: InputPasswordProps) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <InputGroup size="md">
      <Input
        {...props}
        type={show ? 'text' : 'password'}
      />
      <InputRightElement cursor="pointer" width="4.5rem" mt="1.8rem" onClick={handleClick}>
        {show ? <BsEyeFill size="1.25rem" color="gray" /> : <BsEyeSlashFill size="20px" color="gray" />}
      </InputRightElement>
    </InputGroup>
  );
}
