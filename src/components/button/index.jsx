import { StyledButton } from "./styled";

function Button({onClick, text}) {
  return <StyledButton onClick={onClick}>
    {text}
  </StyledButton>;
}

export default Button;
