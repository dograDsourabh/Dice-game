import styled from 'styled-components';

const TotalScore = ({ score, change, animationId }) => {
  return (
    <ScoreContainer>
      <ScoreValue
        key={animationId}
        $change={change}
        $animate={animationId > 0}
        aria-live="polite"
        aria-atomic="true"
      >
        {score}
      </ScoreValue>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const ScoreValue = styled.h1`
  @keyframes score-update {
    0% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  font-size: 100px;
  color: ${(props) =>
    props.$change > 0 ? '#218838' : props.$change < 0 ? '#c62828' : 'inherit'};
  animation: ${(props) => (props.$animate ? 'score-update 420ms ease-out' : 'none')};
  transform-origin: center;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;