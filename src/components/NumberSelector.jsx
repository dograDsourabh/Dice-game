import styled from 'styled-components';

const NUMBERS = [1, 2, 3, 4, 5, 6];

const NumberSelector = ({ selectedNumber, onSelectNumber }) => {
  return (
    <NumberSelectorContainer>
      <div className="numbers" role="group" aria-label="Select a number">
        {NUMBERS.map((number) => (
          <NumberButton
            type="button"
            $isSelected={number === selectedNumber}
            aria-pressed={number === selectedNumber}
            key={number}
            onClick={() => onSelectNumber(number)}
          >
            {number}
          </NumberButton>
        ))}
      </div>
      <p>Select number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;

  .numbers {
    display: flex;
    gap: 20px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const NumberButton = styled.button`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? 'black' : 'white')};
  color: ${(props) => (props.$isSelected ? 'white' : 'black')};
  transform: ${(props) => (props.$isSelected ? 'translateY(-4px)' : 'none')};
  box-shadow: ${(props) => (props.$isSelected ? '0 5px 12px rgb(0 0 0 / 20%)' : 'none')};
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-4px);
  }

  &:active {
    transform: scale(0.94);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;