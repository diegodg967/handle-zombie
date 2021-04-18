import styled from 'styled-components';
import { SCREEN_SMALL } from '../../constants';

export const StyledList = styled.ul`
  padding: 0 10px;
  list-style: none;

  @media (min-width: ${SCREEN_SMALL}) {
    width: 100%;
    max-width: ${SCREEN_SMALL};
    margin: 0 auto;
  }

  li {
    margin-bottom: 20px;
  }
`;
