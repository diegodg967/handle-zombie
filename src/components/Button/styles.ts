import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px 15px;
  background: #FF47BF;
  border: 0;
  font-family: 'VT323', monospace;
  font-size: 40px;
  color: white;
  white-space: nowrap;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .1);

  transition: all .2s;

  &:hover {
    background: #ff47bf;
  }

  &:active {
    background: #ff47bf;
  }  

  &:disabled {
    background: none;
    color: #ff47bf;
    box-shadow: none;
  }
`;
