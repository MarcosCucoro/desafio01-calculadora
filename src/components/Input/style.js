import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 25%;
  background-color: rgb(0, 0, 0);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  font-family: "Roboto";

  border-radius: 0.5em;

  input {
    padding: 1em;
    width: 100%;
    height: 75px;
    background-color: #aaffaa;
    border: 0;
    text-align: center;
    font-size: 24px;
    font-family: "Roboto";
  }
`;
export const ExpressionText = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6); /* Cor branca com opacidade reduzida */
  text-align: right;
  width: 90%;
`;

export const ResultText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: right;
  width: 90%;
`;
