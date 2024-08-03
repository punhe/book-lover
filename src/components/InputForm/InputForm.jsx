import React, { useState } from "react";
import { WrapperInputstyle } from "./style";

const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "input text", ...rests } = props;
  return (
    <WrapperInputstyle placeholder={placeholder} valueInput={valueInput} {...rests} />
)};
export default InputForm;
