import styled from "styled-components";
import NumbersComponent from "./NumbersComponent";
import InputComponent from "./InputComponent";
import { useState } from "react";
import OPTIONS_BUTTON from "../constant/OptionButton";
import { evaluate } from "mathjs";
import validationDigit from "../helper/validationDigit";

const Container = styled.div`
  padding: 5px;
  border-radius: 12px;
`;

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [dynamicArray, setDynamicArray] = useState([]);

    const handleButtonClickValue = (newValue) => {
      const updateDynamicArray = OPTIONS_BUTTON.find((item) => {
        if (item.value === newValue) {
          return item;
        }
      });

      const newItem = {
        type: updateDynamicArray.type,
        value: updateDynamicArray.value,
      };

      const testValidArray = [...dynamicArray, newItem];

      const validationdynamicArray = validationDigit(testValidArray, newItem);

      if (validationdynamicArray) {
        setDynamicArray((prev) => [...prev, newItem]);

        const inputUpdate = [...dynamicArray, newItem]
          .map((item) => {
            return item.value;
          })
          .join("");

        setInputValue(inputUpdate);
      }

    };

    const handleResultOperation = () => {

      if(!inputValue) {
        return false
      }

      try {
          const result = evaluate(inputValue);
          setDynamicArray([{type: "result", value: result}]);
          setInputValue(result);
      } catch (err) {
          console.log(err)
          setInputValue("Erro ao realizar cálculo");
          setDynamicArray([]);
      }
      
    }

    const handleClearOperation = () => {
      setInputValue("");
      setDynamicArray([]);
    }


    return (
      <Container>
        <InputComponent
          inputValue={inputValue}
        />
        <NumbersComponent
          handleButtonClickValue={handleButtonClickValue}
          handleResultOperation={handleResultOperation}
          handleClearOperation={handleClearOperation}
        />
      </Container>
    );
};


export default Calculator;
