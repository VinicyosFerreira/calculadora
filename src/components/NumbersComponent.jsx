import styled from 'styled-components'
import ButtonComponent from './ButtonComponent'


 const ContainerNumbers = styled.div `
        display : grid;
        grid-template-columns: repeat(4, 90px);
        grid-template-rows: repeat(5, 90px);
        gap: 5px;
   `
function NumbersComponent({handleButtonClickValue , handleResultOperation, handleClearOperation}) {

  return (
    <ContainerNumbers>
            <ButtonComponent onClick={() => handleClearOperation()}>C</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("-")}>-</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("+")}>+</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("/")} >/</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("7")}>7</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("8")} >8</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("9")}>9</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("*")}>*</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("4")}>4</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("5")}>5</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("6")}>6</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue(".")}>.</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("1")}>1</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("2")}>2</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("3")}>3</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("0")}>0</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue(")")}>{")"}</ButtonComponent>
            <ButtonComponent onClick={() => handleButtonClickValue("(")}>{"("}</ButtonComponent>
            <ButtonComponent variant={"equal" } onClick={() => handleResultOperation()}>=</ButtonComponent>
    </ContainerNumbers>
  )
}

export default NumbersComponent