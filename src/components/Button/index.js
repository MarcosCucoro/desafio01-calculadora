import { NumberButton, OperationButton, EqualsButton } from "./style";

const Button = ({ label, onClick, type }) => {
  if (type === "number") {
    return <NumberButton onClick={() => onClick(label)}>{label}</NumberButton>;
  }
  if (type === "operation") {
    return <OperationButton onClick={() => onClick(label)}>{label}</OperationButton>;
  }
  if (type === "equals") {
    return <EqualsButton onClick={onClick}>{label}</EqualsButton>;
  }
  return null;
};

export default Button;
