import React, { useState, useEffect, useCallback } from 'react';
import Logo from '../Logo';
import { FaSearch } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RiSkullLine } from 'react-icons/ri';
import { StyledHeader } from './styles';
import { Props } from './types';

const Header: React.FC<Props> = ({ onSearch, onInfectedFilter }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [isInfectedFiltering, setIsInfectedFiltering] = useState(false);

  const openSearch = () => {
    setIsSearching(true);
  }

  const closeSearch = () => {
    onSearch('');
    setIsSearching(false);
    setIsInfectedFiltering(false);
  }

  const handleSearch = (value: string) => {
    onSearch(value);
  };

  const handleInfectedFilter = useCallback(() => {
    onInfectedFilter();
  }, [onInfectedFilter]);

  useEffect(() => {
    if (!isInfectedFiltering) {
      onSearch('');
      return;
    }
    handleInfectedFilter();
  }, [isInfectedFiltering, handleInfectedFilter, onSearch]);

  return (    
    isSearching ? 
      <StyledHeader>
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
        <div>
          <RiSkullLine
            size={32}
            color={isInfectedFiltering ? '#C1CB60' : '#999'}
            onClick={() => setIsInfectedFiltering(!isInfectedFiltering)}
          />
          <IoMdCloseCircleOutline
            size={32}
            color="#999"
            onClick={closeSearch}
          />
        </div>
      </StyledHeader> : 
      <StyledHeader>
        <Logo
          isSmall
          inverted
        />
        <FaSearch
          size={22}
          color="#999"
          onClick={openSearch}
        />
      </StyledHeader>    
  )
};

export default Header;
