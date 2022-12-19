import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "7px 15px"};
  margin: ${(props) => props.margin || 0};
  background-color: ${(props) => props.bgColor || "#6D94CC"};
  color: ${(props) => props.color || "#595959"};
  font-size: ${(props) => props.fontSize || "16px"};
  border: ${(props) => props.border || "none"};

  :disabled {
    background-color: #ccc;
  }
`;

export default function ButtonComponent(props) {
  return (
    <Button
      onClick={props.method}
      padding={props.padding}
      margin={props.margin}
      bgColor={props.bgColor}
      color={props.color}
      fontSize={props.fontSize}
      border={props.border}
      width={props.width}
      height={props.height}
      disabled={props.disabled}
    >
      {props.name}
    </Button>
  );
}
