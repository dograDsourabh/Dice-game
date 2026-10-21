import styled from "styled-components"
const Container = styled.div`
max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  top: 50%;left: 50%;
  transform: translate(-50%, -50%);
  .content h1{
    font-size: 90px;
    white-space: nowrap;}
  `

const Button = styled.button`
background-color: #000;
color: #fff;
padding: 10px 20px;
border: none;
transition: all 0.3s ease-in-out;
&:hover{
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;}
`
const StartGame = ({ onStart }) => {
  return (
    <Container>
      <img src="/images/Dices.png" alt="Dice game" />
      <div className="content">
        <h1> Dice Game</h1>
        <Button type="button" onClick={onStart}>Start Game</Button>
      </div>
    </Container>
  )
}

export default StartGame
