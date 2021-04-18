import styled, { css } from 'styled-components';
import { Props } from './types';

export const StyledCard = styled.div<Props>`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  height: 86px;
  border-radius: 10px;
  background: #d9d9d9;
  cursor: pointer;
  transition: all .3s;

  img {
    position: absolute;
    top: -15px;
    left: 10px;
    height: 90px;
    transition: all .3s;
  }

  div {
    display: flex;
    justify-content: center;
    padding: 15px;
    transition: all .3s;    

    &:nth-child(2) {
      flex: 1;
      flex-direction: column;
      align-items: flex-end;      
      justify-content: center;

      strong {
        margin-bottom: 10px;
        font-family: 'VT323', monospace;
        font-size: 40px;
        color: #292737;
        transition: all .3s;
      }

      ul {
        height: 0;
        padding: 0;
        overflow: hidden;
        transition: all .3s;

        li {
          margin: 0;
          font-family: 'VT323', monospace;
          font-size: 24px;
          line-height: 24px;
          text-align: right;
          color: #fff;

          span {
            color: #00FF83;
          }
        }
      }
    }

    &:nth-child(3) {
      height: 0;
      padding: 0 15px;
      overflow: hidden;

      button {
        visibility: hidden;
        opacity: 0;
      }
    }
  }
  
  ${props => props.selected && css`
    height: 240px;
    background: #292737;
    cursor: default;

    img {
      top: -30px;
      left: 0;
      height: 163px;
    }   

    div {      
      &:nth-child(2) {
        justify-content: flex-start;

        strong {
          color: #fff;
        }

        ul {
          height: 50px;
        }
      }

      &:nth-child(3) {
        height: 80px;
        padding: 15px;

        button {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  `}

  ${props => props.infected && css`
    background: #C1CB60;
  `}

  ${props => (props.selected && props.infected) && css`
    height: 160px;

    div {      
      &:nth-child(2) {
        strong {
          color: #292737;
        }

        ul {
          li {
            color: #292737;

            span {
              color: #FF47BF;
            }
          }
        }
      }
    }
  `}
`;
