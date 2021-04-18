import styled, { css } from 'styled-components';
import { Props } from './types';

export const StyledLogo = styled.span<Props>`
  font-family: 'VT323', monospace;
  font-size: 50px;
  color: #fff;

  strong {
    color: #00FF83;
  }

  ${props => props.isSmall && css`
    font-size: 36px;
  `}

  ${props => props.inverted && css`
    color: #292737;

    strong {
      color: #00FF83;
    }
  `}
`;
