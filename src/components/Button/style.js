import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #949494;
    background-color:rgb(43, 45, 46);
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 0.5em;
    cursor: pointer;
    
    &:hover {
        opacity: 0.6;
    }
`
// Estilo para os botões de números (Cinza claro)
export const NumberButton = styled(ButtonContainer)`
  background-color: #b0b0b0;  // Cor cinza claro para números
`

// Estilo para os botões de operações (Cinza escuro)
export const OperationButton = styled(ButtonContainer)`
  background-color: #707070;  // Cor cinza escuro para operações
`

// Estilo para o botão de igual (Vermelho)
export const EqualsButton = styled(ButtonContainer)`
  background-color:rgb(231, 143, 60);  // Cor vermelha para o botão "="
`

