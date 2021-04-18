import React from 'react';
import { StyledLogo } from './styles';
import { Props } from './types'; 

const Logo: React.FC<Props> = ({ isSmall, inverted }) => (
  <StyledLogo
    isSmall={isSmall}
    inverted={inverted}
  >
    handle<strong>Zombie</strong>( )
  </StyledLogo>
);

export default Logo;
