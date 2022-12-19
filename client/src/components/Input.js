import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "7px 15px"};
  margin: ${(props) => props.margin || 0};
  background-color: ${(props) => props.bgColor || "#FDFDFD"};
  color: ${(props) => props.color || "#595959"};
  font-size: ${(props) => props.fontSize || "16px"};
  border: ${(props) => props.border || "none"};
  border-bottom: ${(props) => props.borderBottom || "1px solid #7F7F7F"};
  border-radius: ${(props) => props.radius || "0px"};

  ::placeholder {
    color: ${(props) => props.color || "#595959"};
  }

  :focus {
    border-bottom: ${(props) => props.focus || "none"};
    outline: ${(props) => props.outline || "none"};
  }
`;

export default function InputComponent(props) {
  return (
    <Input
      onChange={props.method}
      type={props.type}
      placeholder={props.placeholder}
      padding={props.padding}
      margin={props.margin}
      bgColor={props.bgColor}
      color={props.color}
      fontSize={props.fontSize}
      border={props.border}
      width={props.width}
      height={props.height}
      outline={props.outline}
      focus={props.focus}
      radius={props.radius}
      borderBottom={props.borderBottom}
      required
    />
  );
}
