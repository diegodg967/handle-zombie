import React, { useState } from 'react';
import { Wrapper, StyledList } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { data } from '../../constants';
import { Character } from '../../types';

const List: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>(data);
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

  const handleCharacter = (id: number) => {
    setSelectedCharacter(id);
  };

  const handleZombie = (id: number) => {
    const newCharacters = [...characters];
    const index = newCharacters.findIndex(character => character.id === id);
    newCharacters[index].infected = true;
    setCharacters(newCharacters);
    setSelectedCharacter(null);
  };

  const handleSearch = (value: string) => {
    console.log('handleSearch wow!', value);
    const filteredCharacters = data.filter(character => {
      return character.name.includes(value);
    });
    setCharacters(filteredCharacters);
  };

  const handleInfectedFilter = () => {
    const infectedCharacters = data.filter(character => {
      return character.infected === true;
    });
    setCharacters(infectedCharacters);
  };

  return (
    <Wrapper>
      <Header
        onSearch={handleSearch}
        onInfectedFilter={handleInfectedFilter}
      />
      <StyledList>
        {
          characters.map(item => (
            <li key={item.id}>
              <Card
                character={item}
                selected={item.id === selectedCharacter}
                infected={item.infected}
                onSelect={handleCharacter}
                onInfect={handleZombie}
              />         
            </li>
          ))
        }
      </StyledList>    
    </Wrapper>
  )
};

export default List
