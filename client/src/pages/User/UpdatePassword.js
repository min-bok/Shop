import React from "react";
import axios from "axios";
import ButtonComponent from "../../components/Button";

export default function UpdatePassword(props) {
  // 버튼 공통 설정
  const Button = (props) => {
    return (
      <ButtonComponent
        name={props.name}
        method={props.method}
        width="90px"
        bgColor="#f2f2f2"
        fontSize="10px"
      />
    );
  };
  // 비밀번호 input disable 및 버튼 name 변경하는 함수
  const inputDisable = () => {
    props.setDisabled(!props.disabled);
  };

  const updatePassword = async () => {
    const url = `/api/auth/updateUserPassword`;

    const val = [props.initPassword, props.password, props.userId];

    // 비밀번호 유효성 검증
    const regex = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    );

    try {
      const result = await axios.put(url, { val });
    } catch (err) {
      console.log(err.response.data.err);
    }
    inputDisable();
  };

  return (
    <>
      {props.disabled ? (
        <Button name="비밀번호 변경" method={inputDisable} />
      ) : (
        <Button name="변경 완료" method={updatePassword} />
      )}
    </>
  );
}
