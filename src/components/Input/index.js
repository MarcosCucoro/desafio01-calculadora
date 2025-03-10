import { ExpressionText, InputContainer, ResultText } from "./style";

const Input = ({expression, result}) => {
  return (
    <InputContainer>
      <ExpressionText>{expression}</ExpressionText> 
      <ResultText>{result}</ResultText>
    </InputContainer>
  );
};

export default Input;
