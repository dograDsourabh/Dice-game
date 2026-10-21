import { useState } from 'react';
import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import TotalScore from './TotalScore';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('');
  const [rollId, setRollId] = useState(0);
  const [scoreChange, setScoreChange] = useState(null);

  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const handleDiceRoll = () => {
    if (selectedNumber === null) {
      setError('Please select a number before rolling the dice.');
      return;
    }

    const rolledNumber = generateRandomNumber(1, 7);
    const points = selectedNumber === rolledNumber ? 1 : -1;
    setCurrentDice(rolledNumber);
    setError('');
    setScore((previousScore) => previousScore + points);
    setScoreChange(points);
    setRollId((previousRollId) => previousRollId + 1);
    setSelectedNumber(null);
  };

  const handleSelectNumber = (number) => {
    setSelectedNumber(number);
    setError('');
  };

  const handleReset = () => {
    setSelectedNumber(null);
    setScore(0);
    setCurrentDice(1);
    setScoreChange(null);
    setError('');
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} change={scoreChange} animationId={rollId} />
        <NumberSelector
          selectedNumber={selectedNumber}
          onSelectNumber={handleSelectNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        onRoll={handleDiceRoll}
        error={error}
        rollId={rollId}
        reset={handleReset}
      />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;

  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;