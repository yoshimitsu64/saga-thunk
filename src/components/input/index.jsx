import { StyledInput } from "./styled";

function Input(props) {
  const { onChange, inputData } = props;
  console.log(inputData)
  return <StyledInput onChange={onChange} value={inputData} />;
}

export default Input;
