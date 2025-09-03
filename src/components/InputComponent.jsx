import styled from 'styled-components'

  const StyledInput = styled.input`
    width: 375px;
    height: 60px;
    background-color: #444;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-bottom: 5px;
    display: block;
    color: #ddd;
    font-size: 2rem;
    text-align: right;
    padding-right: 15px;
  `

function InputComponent({inputValue}) {
  return (
    <StyledInput
        type="text"
        placeholder="0"
        id="number"
        name="number"
        value={inputValue}
        readOnly
    />
  )
}

export default InputComponent