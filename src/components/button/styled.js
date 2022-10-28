import styled from "styled-components";

export const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  border: none;
  background-color: #000;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:active {
    transform: scale(0.87);
  }
  transition: all 0.2s;
  font-size: 30px;
  margin: 20px;
  border-radius: 20px;
`;
