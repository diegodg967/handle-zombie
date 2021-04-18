import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    height: 100%
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: #292737;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 33%;
`;
