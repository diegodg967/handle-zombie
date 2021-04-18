import React from 'react';
import Button from '../Button';
import { StyledCard } from './styles';
import { Props } from './types';

const Card: React.FC<Props> = ({ character, selected, infected, onSelect, onInfect }) => {
  const handleSelect = (characterid: number) => {
    onSelect(characterid)
  }

  const handleInfect = (event: React.MouseEvent<HTMLElement>, characterid: number) => {
    event.stopPropagation();
    onInfect(characterid)
  }

  return (
    <StyledCard
      onClick={() => handleSelect(character.id)}
      selected={selected}
      infected={infected}
    >
      <img src={character.infected ? character.infectedAvatar : character.avatar} alt=""/>
      <div>
        <strong>{character.name}</strong>
        <ul>
          <li>Job: <span>{character.job}</span></li>
          <li>Gender: <span>{character.gender}</span></li>
        </ul>
      </div>
      {!character.infected && <div>
        <Button
          onClick={(event) => handleInfect(event, character.id)}
          disabled={character.infected}
        >
          Infect {character.gender === 'Male' ? 'him' : 'her'}         
        </Button>
      </div>}

    </StyledCard>
  )
};

export default Card;
