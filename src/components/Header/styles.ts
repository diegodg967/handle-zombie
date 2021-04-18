import styled from 'styled-components';
import { SCREEN_SMALL } from '../../constants';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 10px;
  padding: 0 10px;

  @media (min-width: ${SCREEN_SMALL}) {
    width: 100%;
    max-width: ${SCREEN_SMALL};
    margin: 0 auto;
  }

  div {
    &:nth-child(1) {
      flex: 1;

      input {
        width: 100%;
        border: none;
        background: none;
        font-family: 'VT323', monospace;
        font-size: 36px;

        &::placeholder {
          color: #999;
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      flex: 0;      
    }    
  }

  svg {
    cursor: pointer;

    &+ svg {
      margin-left: 10px;
    }
  }
`;
