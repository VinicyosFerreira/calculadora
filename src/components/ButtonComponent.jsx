import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    color: #FF5C00;
  `
function ButtonComponent({children , variant , ...rest}) {

  return (
    <StyledButton className={variant} {...rest}>
        {children}
    </StyledButton>
  )
}

export default ButtonComponent