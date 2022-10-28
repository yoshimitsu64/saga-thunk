import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/input";

function InputContainer() {
  const dispatch = useDispatch();
  const onChange = (e) => dispatch({type:"SET_INPUT", payload: e.target.value});
  const inputData = useSelector(state => state.inputData)

  return <Input onChange={onChange} inputData={inputData} />;
}

export default InputContainer;
