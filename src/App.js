import React, { useState } from "react";
import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [expression, setExpression] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("");
    setOperation("");
    setExpression("");
  };

  const handleBackspace = () => {
    if (expression.includes("=")) {
      setExpression("");
    } else {
      setCurrentNumber((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    }
  };  

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => {
      if (number === "," && prev.includes(",")) return prev;
      const newValue = prev === "0" && number !== "," ? number : prev + number;
      return newValue;
    });
  };

  const handlePositiveNegative = () => {
    setCurrentNumber((prev) =>
      prev.includes("-") ? prev.replace("-", "") : `-${prev}`
    );
  };

  const handlePercentage = () => {
    if (operation === "x" || operation === "/") {
      setCurrentNumber((prev) => String(parseFloat(prev) / 100).replace(".", ","));
    } else {
      setCurrentNumber((prev) =>
        String((parseFloat(prev) * parseFloat(firstNumber)) / 100).replace(".", ",")
      );
    }
  };

  const handleOperation = (op) => {
    if (!currentNumber) return;

    if (firstNumber) {
      handleEquals();
    }

    setFirstNumber(currentNumber);
    setOperation(op);
    setCurrentNumber("0");
    setExpression(`${currentNumber} ${op}`);
  };

  const handleEquals = () => {
    if (!firstNumber || !operation) return;

    let num1 = parseFloat(firstNumber.replace(",", ".")); 
    let num2 = parseFloat(currentNumber.replace(",", ".")); 

    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return;
    }

    setExpression(`${firstNumber} ${operation} ${currentNumber.replace(".", ",")} =`);
    setCurrentNumber(String(result).replace(".", ","));
    setFirstNumber("");
    setOperation("");
  };

  return (
    <Container>
      <Content>
        <Input expression={expression} result={currentNumber} />
        <Row>
          <Button label={"C"} onClick={handleClear} type="operation"/>
          <Button label={<FontAwesomeIcon icon={faDeleteLeft} />} onClick={() => handleBackspace()} type="operation"/>
          <Button label={"%"} onClick={() => handlePercentage()} type="operation"/>
          <Button label={"/"} onClick={() => handleOperation("/")} type="operation"/>
        </Row>
        <Row>
          <Button label={7} onClick={() => handleAddNumber("7")} type="number"/>
          <Button label={8} onClick={() => handleAddNumber("8")} type="number"/>
          <Button label={9} onClick={() => handleAddNumber("9")} type="number"/>
          <Button label={"x"} onClick={() => handleOperation("x")} type="operation"/>
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber("4")} type="number"/>
          <Button label={5} onClick={() => handleAddNumber("5")} type="number"/>
          <Button label={6} onClick={() => handleAddNumber("6")} type="number"/>
          <Button label={"-"} onClick={() => handleOperation("-")} type="operation"/>
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")} type="number"/>
          <Button label={2} onClick={() => handleAddNumber("2")} type="number"/>
          <Button label={3} onClick={() => handleAddNumber("3")} type="number"/>
          <Button label={"+"} onClick={() => handleOperation("+")} type="operation"/>
        </Row>
        <Row>
          <Button label={"+/-"} onClick={() => handlePositiveNegative()} type="number"/>
          <Button label={0} onClick={() => handleAddNumber("0")} type="number"/>
          <Button label={","} onClick={() => handleAddNumber(",")} type="number"/>
          <Button label={"="} onClick={handleEquals} type="equals"/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
