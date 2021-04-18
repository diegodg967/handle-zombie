import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> =  ({ disabled, ...props }) => (
  <StyledButton
    disabled={disabled}
    {...props}
  />
);

export default Button;