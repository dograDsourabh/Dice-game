import styled from "styled-components";

const RollDice = ({ currentDice, onRoll, error, reset, rollId }) => {
  return (
    <DiceContainer>
      <button
        key={rollId}
        className={`dice${rollId > 0 ? ' is-rolling' : ''}`}
        type="button"
        onClick={onRoll}
        aria-label={`Roll dice; current result is ${currentDice}`}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/dice/dice_${currentDice}.png`}
          alt={`Dice showing ${currentDice}`}
        />
      </button>
      {error ? (
        <p className="error" role="alert">
          {error}
        </p>
      ) : (
        <p>Click the dice to roll</p>
      )}
      <button className="reset" type="button" onClick={reset}>
        Reset
      </button>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  @keyframes roll {
    0% {
      transform: rotate(0deg) translateY(0) scale(1);
    }
    35% {
      transform: rotate(200deg) translateY(-24px) scale(1.12);
    }
    70% {
      transform: rotate(520deg) translateY(4px) scale(0.96);
    }
    100% {
      transform: rotate(720deg) translateY(0) scale(1);
    }
  }

  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }

  .error {
    color: #c62828;
    font-weight: 700;
  }

  .dice {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: transform 180ms ease, filter 180ms ease;

    &.is-rolling {
      animation: roll 650ms cubic-bezier(0.22, 0.68, 0.34, 1.15);
    }

    &:hover {
      transform: translateY(-5px) scale(1.04);
      filter: drop-shadow(0 8px 8px rgb(0 0 0 / 18%));
    }

    &:active {
      transform: scale(0.94);
    }
  }

  .reset {
    margin-top: 20px;
    padding: 10px 30px;
    border: 1px solid #111;
    border-radius: 6px;
    background: #111;
    color: #fff;
    cursor: pointer;
    transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;

    &:hover {
      transform: translateY(-2px);
      background: #fff;
      color: #111;
    }

    &:active {
      transform: scale(0.96);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dice,
    .reset {
      animation: none;
      transition: none;
    }
  }
`;
