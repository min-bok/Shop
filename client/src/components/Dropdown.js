import React from "react";
import styled from "styled-components";
import ButtonComponent from "./Button";
import axios from "axios";

const Cont = styled.div`
  width: 120px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  margin: 10px 0 0 0;
  border-radius: 5px;
  right: 0;
  box-shadow: 2px 4px 4px 0px #7f7f7f1a;
`;

export default function Dropdown() {
  const Button = (props) => {
    return (
      <ButtonComponent
        name={props.name}
        method={props.method}
        width="70%"
        bgColor="#fdfdfd"
        fontSize="12px"
        color="#7f7f7f"
        margin="0 auto"
        hoverColor="#6D94CC"
      />
    );
  };

  const logout = async () => {
    window.confirm("로그아웃 하시겠습니까?");
    const result = await axios.post("/api/auth/logout");
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <Cont>
      <Button name="마이페이지" />
      <Button name="로그아웃" method={logout} />
    </Cont>
  );
}
