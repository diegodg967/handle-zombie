import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> =  (props) => (
  <StyledButton {...props} />
);

export default Button;